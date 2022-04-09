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
import {useSelector} from "react-redux";
import {RESUME_TOOLBAR_MAPS} from "@common/constants/resume";

function TemplateOne(){
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
    const resumeToolbarKeys: string[] = useSelector((state: any) => state.templateModel.resumeToolbarKeys);

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
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact/>}
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job/>}
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate/>}
                    </div>
                </div>
                <div styleName="center">
                    {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.education) || base?.username) && <Synopsis/>}
                    <div styleName="listData">
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill/>}
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post/>}
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project/>}
                        {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateOne;
