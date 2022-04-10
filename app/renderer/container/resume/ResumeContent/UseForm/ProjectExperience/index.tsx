/**
 * @description 项目经验
 */
import React from "react";
import CusModal from "@common/components/CusModal";
import Form from "./Form";
import {useSelector} from "react-redux";
import WrapperExperience from "@src/container/resume/ResumeContent/UseForm/WrapperExperience";
import AdapterExperience, {AdapterExperienceType} from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/adapter";
import useUpdateResumeHook from "@src/container/resume/ResumeContent/useUpdateResumeHook";

interface IProps {
    onClose: () => void;
}

function ProjectExperience({onClose}: IProps){
    const updateResumeHook = useUpdateResumeHook();
    const projectExperience: TSResume.ProjectExperience[] = useSelector(
        (state: any) => state.resumeModel.projectExperience
    );

    const updateDataList = (newDataList: AdapterExperienceType[]) => {
        updateResumeHook<AdapterExperienceType[]>('projectExperience', newDataList);
    }

    return (
        <CusModal.Dialog
            title="项目经验"
            showFooter={false}
            config={{
                cancelBtn: {
                    callback: onClose
                }
            }}
            width={960}
            childStyle={{padding: 0}}>
            <WrapperExperience dataList={AdapterExperience.project(projectExperience)}
               updateDataList={updateDataList}>
                <Form/>
            </WrapperExperience>
        </CusModal.Dialog>
    )
}

export default ProjectExperience;
