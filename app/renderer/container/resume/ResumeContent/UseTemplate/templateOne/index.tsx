/**
 * @description 模板
 * */
import React from "react";
import "./index.less";
import Avatar from "@src/container/templates/templateOne/components/Avatar";
import BaseInfo from "@src/container/templates/templateOne/components/BaseInfo";
import Contact from "@src/container/templates/templateOne/components/Contact";
import Job from "@src/container/templates/templateOne/components/Job";
import Certificate from "@src/container/templates/templateOne/components/Certificate";
import Synopsis from "@src/container/templates/templateOne/components/Synopsis";
import Skill from "@src/container/templates/templateOne/components/Skill";
import Post from "@src/container/templates/templateOne/components/Post";
import Project from "@src/container/templates/templateOne/components/Project";
import Work from "@src/container/templates/templateOne/components/Work";

function TemplateOne(){
    return (
        <div styleName="a4-box">
            <div styleName="flex container" id="visPdf">
                <div styleName="left">
                    <div styleName="avatar">
                        <Avatar/>
                    </div>
                    <div styleName="fillColor"/>
                    <div styleName="baseData">
                        <BaseInfo/>
                        <Contact/>
                        <Job/>
                        <Certificate/>
                    </div>
                </div>
                <div styleName="center">
                    <Synopsis/>
                    <div styleName="listData">
                        <Skill/>
                        <Post/>
                        <Project/>
                        <Work/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateOne;
