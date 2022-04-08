import React from "react";
import "./index.less";
// 引入模板
import * as UseTemplateList from "./UseTemplate";
import CusScrollBox from "@common/components/CusScrollBox";

function ResumeContent(){
    const HEADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;
    return (
        <CusScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne/>
        </CusScrollBox>
    )
}

export default ResumeContent;
