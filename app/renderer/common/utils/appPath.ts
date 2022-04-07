/**
 * @description 该文件用于获取项目绝对路径
 * */

// 监听主进程、渲染进程通信
import {ipcRenderer} from "electron";

export function getAppPath(){
    return new Promise(
        (resolve: (vlaue: string) => void, reject: (value: Error) => void) => {
            ipcRenderer.send('get-root-path', "");
            ipcRenderer.on('reply-root-path', (event, arg: string) => {
                if(arg){
                    resolve(arg);
                } else {
                    reject(new Error('路径错误！'))
                }
            })
        }
    )
}
