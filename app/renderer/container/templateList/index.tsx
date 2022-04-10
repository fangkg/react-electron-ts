import React from "react";
import "./index.less";
import Header from "@src/container/templateList/Header";
import Navigation from "@src/container/templateList/Navigation";
import StaticResume from "@src/container/templateList/StaticResume";
import CusRectSize from "@common/components/CusRectSize";

function TemplateList(){
    return (
        <div styleName="container">
            <Header/>
            <div styleName="content">
                <CusRectSize>
                    <CusRectSize.Left>
                        <Navigation/>
                    </CusRectSize.Left>
                    <CusRectSize.Right>
                        <StaticResume/>
                    </CusRectSize.Right>
                </CusRectSize>
            </div>
        </div>
    )
}

export default TemplateList;
