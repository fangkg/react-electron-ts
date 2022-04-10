/**
 * @description 工作经历
 * */
import "./index.less";
import React from "react";
import {useSelector} from "react-redux";

function Work(){
    const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
    return (
        <div styleName="content">
            <p styleName="label">工作经历 Post</p>
            <ul styleName="list">
                {
                    !!workExperience?.length && workExperience?.map((experience: TSResume.WorkExperience, index: number) => {
                        return (
                            <li styleName="flex" key={index}>
                                <div styleName="left">
                                    <p>
                                        {experience?.beginTime} - {experience.endTime}
                                    </p>
                                    <p>{experience?.post}</p>
                                </div>
                                <div styleName="right">
                                    <p>{experience?.department}</p>
                                    <p>{experience?.content}</p>
                                </div>
                            </li>
                        )
                    })
                }
                <li styleName="flex">
                    <div styleName="left">
                        <p>2019.07-至今</p>
                        <p>前端工程师</p>
                    </div>
                    <div styleName="right">
                        <p>CVTE</p>
                        <p>就职于CVTE，部门人送广州彭于晏，其他的没啥介绍了</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Work;
