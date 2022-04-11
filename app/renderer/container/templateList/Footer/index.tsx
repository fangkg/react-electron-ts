import React from "react";
import "./index.less";
import CusButton from "@common/components/CusButton";
import CusInput from "@common/components/CusInput";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {ROUTER_KEY} from "@common/constants/router";
import {compilePath} from "@common/utils/router";
import ROUTER from "@common/constants/router";

function Footer(){
    const history = useHistory();
    const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);
    const onMadeResume = () => {
        history.push(compilePath(ROUTER.resume, {
            fromPath: ROUTER_KEY.templateList,
            templateId: selectTemplate?.templateId,
            templateIndex: selectTemplate?.templateIndex
        }))
    };

    return (
        <div styleName="footer">
            <CusButton size="middle" className="use-btn" onClick={onMadeResume}>
                以此模板前往制作简历
            </CusButton>
        </div>
    )
}

export default Footer;
