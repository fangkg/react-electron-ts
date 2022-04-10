/**
 * @description 内容
 * */
import React from "react";
import "./index.less";
import * as TemplateList from "@src/container/templates";
import Footer from "../Footer";
import CusScrollBox from "@common/components/CusScrollBox";

function StaticResume(){
    const HEADER_HEIGHT = 76; // 距离头部距离
    const height = document.body.clientHeight;
    return (
        <div styleName="container">
            <CusScrollBox maxHeight={height - HEADER_HEIGHT}>
                <TemplateList.TemplateOne/>
                <Footer/>
            </CusScrollBox>
        </div>
    )
};

export default StaticResume;
