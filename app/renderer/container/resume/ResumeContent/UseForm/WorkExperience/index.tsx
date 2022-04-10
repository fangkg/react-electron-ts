/**
 * @description 工作经历
 */
import React, {useState} from "react";
import CusModal from "@common/components/CusModal";
import {useSelector} from "react-redux";
import WrapperExperience from "@src/container/resume/ResumeContent/UseForm/WrapperExperience";
import AdapterExperience , {AdapterExperienceType} from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/adapter";
import useUpdateResumeHook from "@src/container/resume/ResumeContent/useUpdateResumeHook";
import Form from "@src/container/resume/ResumeContent/UseForm/WorkExperience/Form";

interface IProps {
    onClose: () => void;
}

function WorkExperience({onClose}: IProps) {
    const updateResumeHook = useUpdateResumeHook();
    const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
    const updateDataList = (newDataList: AdapterExperienceType[]) => {
        updateResumeHook<AdapterExperienceType[]>('workExperience', newDataList);
    };

    return (
        <CusModal.Dialog
            title="工作经历"
            showFooter={false}
            config={{
                cancelBtn: {
                    callback: onClose
                }
            }}
            width={960}
            childStyle={{padding: 0}}>
            <WrapperExperience dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList}>
                <Form/>
            </WrapperExperience>
        </CusModal.Dialog>
    )
}

export default WorkExperience;
