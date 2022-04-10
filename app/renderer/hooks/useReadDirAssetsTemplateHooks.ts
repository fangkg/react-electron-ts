/**
 * @description 读取模板静态文件目录
 * */
import fileAction from "@common/utils/file";
import {useDispatch} from "react-redux";
import {getAppPath} from "@common/utils/appPath";
import {createUID} from "@common/utils";

export default function(){
    const dispatch = useDispatch();
    return () => {
        // 先获取应用地址
        getAppPath().then((appPath: string) => {
            // 从assets读取模板图片信息，构造模板列表
            fileAction.readDir(`${appPath}assets/template`).then(async (files: string[]) => {
                // 构造模板列表
                if(files.length > 0){
                    let templateList: TSTemplate.Item[] = [];
                    for(const fileName of files){
                        const base64URL = await fileAction.read(`${appPath}assets/template/${fileName}`, 'base64');
                        templateList.push({
                            templateName: fileName,
                            templateId: createUID(),
                            templateCover: `data:image/png;base64,${base64URL}`
                        })
                    }

                    // 存入到redux中
                    dispatch({
                        type: 'templateModel/setStoreList',
                        payload: [
                            {
                                key: 'templateList',
                                values: templateList
                            },
                            {
                                key: 'selectTemplate',
                                values: templateList[0]
                            }
                        ]
                    })
                }
            }).catch((err: NodeJS.ErrnoException) => {
                throw new Error(err.message);
            })
        })
    }
}
