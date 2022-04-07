import React from "react";
import "./index.less";
import fileAction from "@common/utils/file";
import {getAppPath} from "@common/utils/appPath";

function Resume(){
    // 读取当前文件内容
    // getAppPath()获取当前应用程序在本机的目录路径
    getAppPath().then((rootPath: string) => {
        console.log('应用程序目录为：', rootPath);
        fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`, 'utf8').then((data) => {
            console.log(data)
        })
        fileAction.write(`${rootPath}app/renderer/container/resume/test.tsx`, '123', 'utf8').then(
            data => {
                console.log(data)
            }
        )
    })

    return <div>简历模板</div>
}

export default Resume;
