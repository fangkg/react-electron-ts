/**
 * @description 技能清单Form
 */
import React from "react";
import "./index.less";
import CusModal from "@common/components/CusModal";
import CusInput from "@common/components/CusInput";
import {useSelector} from "react-redux";
import RecommendSkill, {IRecommendSkill} from "@common/constants/skill";

interface IProps {
    onClose: () => void;
}

function Skill({onClose}: IProps){
    const skill: string = useSelector((state: any) => state.resumeModel.skill);
    return (
        <CusModal.Dialog
            title="个人信息"
            showFooter={false}
            config={{
                cancelBtn: {
                    callback: onClose
                }
            }}>
            <div styleName="form">
                <div styleName="flex">
                    <div styleName="left">
                        <span styleName="require" style={{opacity: 0}}>*</span>
                        技能：
                    </div>
                    <div styleName="right">
                        <div styleName="action">
                            {
                                RecommendSkill.map((skill: IRecommendSkill) => {
                                    return (
                                        <div styleName="label"
                                            key={skill.uid}
                                            style={{
                                                color: skill?.styles?.font,
                                                borderColor: skill?.styles?.font,
                                                backgroundColor: skill?.styles?.bg
                                            }}
                                            onClick={() => {
                                                const value = `${skill}${skill ? '｜' : ''}${skill.label}`;
                                            }}>
                                            {skill.label}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <CusInput type="textarea"
                            onChange={(e) => {}}
                            rows={5}
                            value={skill}
                            placeholder="例如 Vue、React"
                            allowClear={true}/>
                        <div styleName="tips"> * 多个技能以 | 分割</div>
                    </div>
                </div>
            </div>
        </CusModal.Dialog>
    )
}

export default Skill;
