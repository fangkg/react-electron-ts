// electron主入口
import {Menu} from "electron";
import path from 'path';
import {app, BrowserWindow, ipcMain, dialog} from 'electron';
import customMenu from "./customMenu";
import "./userData";
const {autoUpdater} = require('electron-updater');

export interface CusBrowserWindow extends BrowserWindow {
    uid?: string;
}

export function isDev(){
    return process.env.NODE_ENV === 'development';
}

function checkVersionUpdate(){
    autoUpdater.autoDownload = false;
    autoUpdater.checkForUpdates();
    autoUpdater.on('error', () => {});
    autoUpdater.on('checking-for-update', () => {});
    autoUpdater.on('update-available', () => {});
    autoUpdater.on('update-not-available', () => {});
    autoUpdater.on('update-download', () => {});
    autoUpdater.on('download-progress', () => {});
}

function createWindow(){
    // 创建浏览器窗口
    const mainWindow: CusBrowserWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: isDev(),
        webPreferences: {
            devTools: isDev(),
            nodeIntegration: true // 注入node模块
        }
    });
    mainWindow.uid = "mainWindow";

    const settingWindow: CusBrowserWindow = new BrowserWindow({
        width: 720,
        height: 240,
        resizable: isDev(),
        show: false,
        frame: false,
        webPreferences: {
            devTools: isDev(),
            nodeIntegration: true
        }
    })
    settingWindow.uid = "settingWindow";

    // settingWindow.on('close', async (e) => {
    //     settingWindow.hide();
    //     e.preventDefault();
    //     e.returnValue = false;
    // })

    if(isDev()){
        // 开发环境下 加载运行在7001端口的react
        mainWindow.loadURL(`http://127.0.0.1:7001`);
        settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
    } else {
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
        settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
    }

    ipcMain.on('Electron:SettingWindow-hide-event', () => {
        if(settingWindow.isVisible()){
            settingWindow.hide();
        }
    })

    ipcMain.on('Electron:SettingWindow-min-event', () => {
        if(settingWindow.isVisible()){
            settingWindow.minimize();
        }
    })
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function(){
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
});

app.on('ready', () => {
    const menu = Menu.buildFromTemplate(customMenu);
    Menu.setApplicationMenu(menu);
    checkVersionUpdate();
})


const ROOT_PATH = path.join(app.getAppPath(), "../");
// 监听渲染进程消息并回复
ipcMain.on('get-root-path', (event, arg) => {
    event.reply('reply-root-path', isDev() ? ROOT_PATH : __dirname);
})

ipcMain.on('open-save-resume-path', (event, arg) => {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then((result) => {
        event.reply('reply-save-resume-path', result.filePaths)
    }).catch((err) => {
        event.reply('reply-save-resume-path', err);
    })
})
