/**
 * @description 头像
 * */
import React from "react";
import "./index.less";
import uploadIcon from "@assets/icon/upload.png";
import useUpdateResumeHook from "@src/container/resume/ResumeContent/useUpdateResumeHook";
import {useSelector} from "react-redux";
import ImageUpload from "@common/components/CusUpload/ImageUpload";
import CusButton from "@common/components/CusButton";

function Avatar(){
    const updateResumeHook = useUpdateResumeHook();
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

    const onUpdateUserAvatar = (avatarUrl: string) => {
        updateResumeHook<string>('base/avatar', avatarUrl);
    }

    return (
        <div styleName="box">
            {
                !base?.avatar && (
                    <ImageUpload
                        icon={uploadIcon}
                        accept="image/*"
                        multiple={false}
                        onAfterChange={(files: TSUpload.File[]) => {
                            onUpdateUserAvatar(files[0]?.base64URL);
                        }}/>
                )
            }
            {
                base?.avatar && (<div styleName="avatar">
                    <img src={base?.avatar}/>
                    <div styleName="mask">
                        <CusButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar("")}>
                            更换
                        </CusButton>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Avatar;
