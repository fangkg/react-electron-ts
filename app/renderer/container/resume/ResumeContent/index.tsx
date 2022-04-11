import React, {useEffect, useState} from "react";
import "./index.less";
import * as UseTemplateList from "./UseTemplate";
import {useParams} from "react-router";
import CusScrollBox from "@common/components/CusScrollBox";
import Messager, {MESSAGE_EVENT_NAME_MAPS} from "@common/messager";
import Personal from "@src/container/resume/ResumeContent/UseForm/Personal";
import Education from "@src/container/resume/ResumeContent/UseForm/Education";
import {RESUME_TOOLBAR_MAPS} from "@common/constants/resume";

function ResumeContent(){
    const HEADER_ACTION_HEIGHT = 92;
    // const height = document.body.clientHeight;
    const [height, setHeight] = useState(0);
    const [formName, setFormName] = useState("");
    const [showFormModal, setShowFormModal] = useState(false);
    const routerParams = useParams<{fromPath: string; templateId: string; templateIndex: string}>();

    /**
     * @description 接收订阅事件传参
     * */
    const onReceive = (e: any) => {
        Messager.receive(e, (data: any) => {
            console.log('发布订阅，传参：', data)
            setShowFormModal(true);
            setFormName(data?.form_name);
        })
    }

    const onClose = () => {
        setShowFormModal(false);
        setFormName("");
    }

    useEffect(() => {
        if(document.body && document.body.clientHeight > 0) {
            setHeight(document.body.clientHeight);
        }
    }, [document.body]);

    // 监听事件
    useEffect(() => {
        document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        return () => {
            document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        }
    }, [])
    return (
        <CusScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
            {
                routerParams?.templateId && Number(routerParams?.templateIndex) === 0 && <UseTemplateList.TemplateOne/>
            }
            {
                showFormModal && (
                    <>
                        {formName === RESUME_TOOLBAR_MAPS.personal && <Personal/>}
                        {formName === RESUME_TOOLBAR_MAPS.education && <Education onClose={() => {}}/>}
                    </>
                )
            }
        </CusScrollBox>
    )
}

export default ResumeContent;
