import React from "react";
import "./index.less";
import CusButton from "@common/components/CusButton";
import CusInput from "@common/components/CusInput";

function Footer(){
    const onMadeResume = () => {
        console.log('前往制作页面')
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
