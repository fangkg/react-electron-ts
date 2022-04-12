import React, {useState, useEffect} from "react";
import "./index.less";
import {ipcRenderer} from "electron";
import {getAppPath} from "@common/utils/appPath";
import {getUserStoreDataPath} from "@common/utils/appPath";
import {useReadGlobalConfigFile, useUpdateGlobalConfigFile} from "@src/hooks/useGlobalConfigActionHooks";

function Setting(){
    const [resumeSavePath, setResumeSavePath] = useState("");
    const readAppConfigThemeFile = useReadGlobalConfigFile();
    const updateGlobalConfigFile = useUpdateGlobalConfigFile();

    useEffect(() => {
        readAppConfigThemeFile().then((value: {[key: string]: any}) => {
            if(value?.resumeSavePath){
                setResumeSavePath(value?.resumeSavePath);
            } else {
                getUserStoreDataPath().then((appPath: string) => {
                    setResumeSavePath(`${appPath}resumeCache`);
                    updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
                })
            }
        })
    }, []);

    const onChangePath = () => {
        // 向主进程发送消息调用dialog
        ipcRenderer.send('open-save-resume-path', "");
        // 监听从主进程返回消息
        ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
            if(arg){
                if(arg.length > 0){
                    setResumeSavePath(arg[0]);
                    updateGlobalConfigFile('resumeSavePath', arg[0]);
                }
            } else {
                console.log('自定义存储路径失败！')
            }
        })
    }

    return (
        <div styleName="container">
            <p styleName="label">修改简历数据存储路径</p>
            <div styleName="input">
                <div styleName="value">{resumeSavePath || '当前存储路径：'}</div>
                <div styleName="update-btn" onClick={onChangePath}>
                    更改路径
                </div>
            </div>
        </div>
    )
};

export default Setting;
