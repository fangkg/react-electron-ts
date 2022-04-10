/**
 * @description 项目经历
 * */
import React from "react";
import "./index.less";
import {useSelector} from "react-redux";

function Project(){
    const projectExperience: TSResume.ProjectExperience[] = useSelector((state: any) => state.resumeModel.projectExperience);

    return (
        <div styleName="content">
            <p styleName="label">项目经历 Project</p>
            <ul styleName="list">
                {
                    !!projectExperience?.length && projectExperience?.map((experience: TSResume.ProjectExperience, index: number) => {
                        return (
                            <li styleName="flex" key={index}>
                                <div styleName="left">
                                    {
                                        (experience?.beginTime || experience?.endTime) && (
                                            <p>
                                                {experience?.beginTime && !experience?.endTime && <span>{experience?.beginTime}</span>}
                                                {!experience?.beginTime && experience?.endTime && <span>{experience?.endTime}</span>}
                                                {experience?.beginTime && experience?.endTime && <span>{experience?.beginTime} - {experience?.endTime}</span>}
                                            </p>
                                        )
                                    }
                                </div>
                                <div styleName="right">
                                    <p>
                                        {experience?.projectName && !experience?.post && <span>{experience?.projectName}</span>}
                                        {!experience?.projectName && experience?.post && <span>{experience?.post}</span>}
                                        {
                                            experience?.projectName && experience.post && (
                                                <span>
                                                    {experience?.projectName} - {experience.post}
                                                </span>
                                            )
                                        }
                                    </p>
                                </div>
                                <div styleName="text">
                                    <ul styleName="item-box">
                                        {
                                            experience?.content && experience?.parseContent && experience?.parseContent.length > 0 && experience?.parseContent?.map((content: string, index: number) => {
                                                return (
                                                    <li styleName="item-content" key={index}>
                                                        <span>{content}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Project;
