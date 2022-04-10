/**
 * @description 在校经历
 */
import React from "react";
import CusInput from "@common/components/CusInput";
import Form from "./Form";
import {useSelector} from "react-redux";
import WrapperExperience from "@src/container/resume/ResumeContent/UseForm/WrapperExperience";
import AdapterExperience, {AdapterExperienceType} from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/adapter";
import useUpdateResumeHook from "@src/container/resume/ResumeContent/useUpdateResumeHook";
import CusModal from "@common/components/CusModal";

interface IProps {
    onClose: () => void;
}

function SchoolExperience({onClose}: IProps){
    const updateResumeHook = useUpdateResumeHook();
    const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: any) => state.resumeModel.schoolExperience);
    const updateDataList = (newDataList: AdapterExperienceType[]) => {
        updateResumeHook<AdapterExperienceType[]>('schoolExperience', newDataList);
    }

    return (
        <CusModal.Dialog
            title="在校经历"
            showFooter={false}
            config={{
                cancelBtn: {
                    callback: onClose
                }
            }}
            width={960}
            childStyle={{padding: 0}}>
            <WrapperExperience dataList={AdapterExperience.school(schoolExperience)} updateDataList={updateDataList}>
                <Form/>
            </WrapperExperience>
        </CusModal.Dialog>
    )
}

export default SchoolExperience;
