/**
 * @description 教育信息Form
 */
import React from "react";
import "./index.less";
import CusModal from "@common/components/CusModal";
import CusInput from "@common/components/CusInput";
import {useSelector} from "react-redux";

interface IProps {
    onClose: () => void;
}

function Education({onClose}: IProps) {
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
    return (
        <CusModal.Dialog
            title="教育信息"
            showFooter={false}
            config={{
                cancelBtn: {
                    callback: onClose
                }
            }}>
            <div styleName="form">
                <div styleName="flex">
                    <div styleName="left">
                        <span styleName="require">*</span>学校：
                    </div>
                    <div styleName="right">
                        <CusInput onChange={(e) => {}}
                            value={base?.school || ""}
                            placeholder="请输入学校"
                            allowClear={true}/>
                    </div>
                    <div styleName="flex">
                        <div styleName="left">
                            <span styleName="require">*</span>专业：
                        </div>
                        <div styleName="right">
                            <CusInput onChange={(e) => {}}
                                value={base?.major || ""}
                                placeholder="请输入专业"
                                allowClear={true}/>
                        </div>
                    </div>
                    <div styleName="flex">
                        <div styleName="left">
                            <span styleName="require">*</span>学 位 ：
                        </div>
                        <div styleName="right">
                            <CusInput
                                onChange={(e) => {}}
                                value={base?.degree || ''}
                                placeholder="学士？硕士？博士？"
                                allowClear={true}
                            />
                        </div>
                    </div>
                    <div styleName="flex">
                        <div styleName="left">
                            <span styleName="require">*</span>学 年 ：
                        </div>
                        <div styleName="right">
                            <CusInput
                                onChange={(e) => {
                                    const nextTime = {
                                        ...base?.onSchoolTime,
                                        beginTime: e.target.value,
                                    };
                                }}
                                value={base?.onSchoolTime?.beginTime || ''}
                                placeholder="2015.09.01"
                                allowClear={true}
                                style={{ width: 300 }}
                            />
                            <span styleName="line">-</span>
                            <CusInput
                                onChange={(e) => {
                                    const nextTime = {
                                        ...base?.onSchoolTime,
                                        endTime: e.target.value,
                                    };
                                }}
                                value={base?.onSchoolTime?.endTime || ''}
                                placeholder="2015.06.30"
                                style={{ width: 300 }}
                                allowClear={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CusModal.Dialog>
    )
}

export default Education;
