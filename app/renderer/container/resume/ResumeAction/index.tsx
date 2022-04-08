import React from "react";
import "./index.less";
import {useHistory} from "react-router";
import ROUTER from "@common/constants/router";
import CusButton from "@common/components/CusButton";

function ResumeAction(){
    const history = useHistory();
    // 返回首页
    const onBack = () => history.push(ROUTER.root);
    // 导出PDF
    const onExport = () => {}
    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <CusButton size="middle" className="export-btn" onClick={onExport}>导出PDF</CusButton>
        </div>
    )
}

export default ResumeAction;
