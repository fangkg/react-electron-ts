/**
 * @description 专门服务于经验弹窗左侧
 */
import React from "react";
import "./index.less";
import CusButton from "@common/components/CusButton";
import CusScrollBox from "@common/components/CusScrollBox";
import List, {IListProps} from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/Left/List";

interface IProps extends IListProps {
    onAdd: () => void;
}

function Left({index, experienceList = [], onDelete, onAdd, onChange}: IProps){
    return (
        <div styleName="layout-left">
            {
                experienceList.length > 0 && (
                    <>
                        <CusScrollBox maxHeight={420}>
                            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete}/>
                        </CusScrollBox>
                        <div styleName="action">
                            <CusButton width={112} size="middle" onClick={onAdd}>
                                添加条目
                            </CusButton>
                        </div>
                    </>
                )
            }
            {
                experienceList.length === 0 && (
                    <div styleName="empty">
                        <div styleName="empty-tips">还没有内容~</div>
                        <div styleName="empty-action">
                            <CusButton width={112} size="middle" onClick={onAdd}>
                                添加条目
                            </CusButton>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Left;
