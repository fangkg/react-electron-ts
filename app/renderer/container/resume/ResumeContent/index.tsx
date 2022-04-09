import React, {useEffect, useState} from "react";
import "./index.less";
// 引入模板
import * as UseTemplateList from "./UseTemplate";
import CusScrollBox from "@common/components/CusScrollBox";
import Messager, {MESSAGE_EVENT_NAME_MAPS} from "@common/messager";
import Personal from "@src/container/resume/ResumeContent/UseForm/Personal";
import Education from "@src/container/resume/ResumeContent/UseForm/Education";
import {RESUME_TOOLBAR_MAPS} from "@common/constants/resume";

function ResumeContent(){
    const HEADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;
    const [formName, setFormName] = useState("");
    const [showFormModal, setShowFormModal] = useState(false);

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

    // 监听事件
    useEffect(() => {
        document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        return () => {
            document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        }
    }, [])
    return (
        <CusScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne/>
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
