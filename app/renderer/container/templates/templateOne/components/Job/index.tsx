/**
 * @description 求职意向
 * */
import React from "react";
// import "@src/container/templates/styles/template-one.less";
import '../../../styles/template-one.less';
import "./index.less";

function Job(){
    return (
        <div styleName="container">
            <p styleName="title">求职意向</p>
            <ul styleName="content">
                <li>职位：前端工程师</li>
                <li>城市：广州｜成都｜海口</li>
            </ul>
        </div>
    )
}

export default Job;
