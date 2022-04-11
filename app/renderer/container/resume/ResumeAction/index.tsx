import React, {useState} from "react";
import "./index.less";
import {useHistory, useParams} from "react-router";
import ROUTER, {ROUTER_KEY} from "@common/constants/router";
import CusButton from "@common/components/CusButton";
import {toPrintPdf} from "@common/utils/htmlToPdf";
import {useSelector} from "react-redux";
import CusModal from "@common/components/CusModal";
import fileAction from "@common/utils/file";
import {createUID} from "@common/utils";
import {intToDateString} from "@common/utils/time";
import {getAppPath} from "@common/utils/appPath";
import {useReadGlobalConfigFile, useUpdateGlobalConfigFile} from "@src/hooks/useGlobalConfigActionHooks";
import {get} from "lodash";
import {compilePath} from "@common/utils/router";
import useClickAway from "@common/hook/useClickAway";

function ResumeAction(){
    const history = useHistory();
    const routerParams = useParams<{fromPath: string; templateId: string; templateIndex: string}>();
    const [showModal, setShowModal] = useState(false);
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
    const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
    const resume = useSelector((state: any) => state.resumeModel);
    const readAppConfigThemeFile = useReadGlobalConfigFile();
    const updateGlobalConfigFile = useUpdateGlobalConfigFile();
    const {ref, componentVisible, setComponentVisible} = useClickAway(false);

    // 返回首页
    const onBack = () => {
        if(routerParams?.fromPath === ROUTER_KEY.root){
            history.push(compilePath(ROUTER.root));
        } else if(routerParams?.fromPath === ROUTER_KEY.templateList){
            history.push(compilePath(ROUTER.templateList));
        } else {
            console.log('here')
        }
    }

    const exportPdf = () => {
        toPrintPdf(`${base?.username} + ${base?.school} + ${work?.job}`);
        // setShowModal(false);
        setComponentVisible(false);
        readAppConfigThemeFile().then((value: {[key: string]: any}) => {
            if(value?.resumeSavePath){
                saveResumeJson(value?.resumeSavePath);
            } else {
                getAppPath().then((appPath: string) => {
                    updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
                    saveResumeJson(`${appPath}resumeCache`);
                })
            }
        })
    }

    const saveResumeJson = (resumeSavePath: string) => {
        const date = intToDateString(new Date().valueOf(), "_");
        const prefix = `${date}_${base?.username}_${base?.school}_${work?.job}_${createUID()}.json`;
        if(resumeSavePath && resumeSavePath.search('resumeCache') > -1){
            fileAction?.write(`${resumeSavePath}/${prefix}`, resume, 'utf8');
        } else {
            fileAction?.mkdirDir(`${resumeSavePath}/resumeCache`).then((path) => {
                if(path) {
                    fileAction?.write(`${path}/${prefix}`, resume, 'utf8');
                }
            }).catch(() => {
                console.log('创建文件夹失败！')
            })
        }
    }

    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <CusButton size="middle" className="export-btn" onClick={() => setComponentVisible(true)}>导出PDF</CusButton>
            {
                componentVisible && (
                    <CusModal.Confirm
                        eleRef={ref}
                        title="确定要打印简历吗？"
                        description="请确保信息正确，目前只支持单页打印"
                        config={{
                            cancelBtn: {
                                isShow: true,
                                callback: () => setComponentVisible(false)
                            },
                            submitBtn: {
                                isShow: true,
                                callback: exportPdf
                            }
                        }}/>
                )
            }
        </div>
    )
}

export default ResumeAction;
