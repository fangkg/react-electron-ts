/**
 * @description 工作期望Form
 */
import React from "react";
import "./index.less";
import CusModal from "@common/components/CusModal";
import CusInput from "@common/components/CusInput";
import {useSelector} from "react-redux";

interface IProps {
    onClose: () => void;
}

function Work({onClose}: IProps){
    const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
    return (
        <CusModal.Dialog
            title="工作期望"
            showFooter={false}
            config={{
                cancelBtn: {
                    callback: onClose
                }
            }}>
            <div styleName="form">
                <div styleName="flex">
                    <div styleName="left">
                        <span styleName="require">*</span>职 位 ：
                    </div>
                    <div styleName="right">
                        <CusInput onChange={(e) => {}} value={work?.job || ''} placeholder="求职岗位" allowClear={true} />
                    </div>
                </div>
                <div styleName="flex">
                    <div styleName="left">
                        <span styleName="require">*</span>城 市 ：
                    </div>
                    <div styleName="right">
                        <CusInput onChange={(e) => {}} value={work?.city || ''} placeholder="请输入意愿城市" allowClear={true} />
                        <div styleName="tips"> * 多个地点以｜分割</div>
                    </div>
                </div>
            </div>
        </CusModal.Dialog>
    )
}

export default Work;
