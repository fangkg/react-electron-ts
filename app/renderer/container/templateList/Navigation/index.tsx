/**
 * @description 模板列表侧边栏
 * */
import React, {useState} from "react";
import "./index.less";
import UseIcon from "@assets/icon/use.png";
import CusScrollBox from "@common/components/CusScrollBox";
import CusButton from "@common/components/CusButton";
import {useSelector, useDispatch} from "react-redux";

function Navigation(){
    const dispatch = useDispatch();
    const HEADER_HEIGHT = 92;
    const height = document.body.clientHeight;
    const templateList: TSTemplate.Item[] = useSelector((state: any) => state.templateModel.templateList);
    const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);
    const onChangeTemplate = (template: TSTemplate.Item) => {
        dispatch({
            type: "templateModel/setStore",
            payload: {
                key: 'selectTemplate',
                values: template
            }
        })
    }

    return (
        <div styleName="navigation">
            <CusScrollBox maxHeight={height - HEADER_HEIGHT}>
                {
                    templateList && templateList.length > 0 && templateList.map((template: TSTemplate.Item) => {
                        return (
                            <div styleName="template" key={template?.templateId}>
                                <img styleName="cover" src={template?.templateCover}/>
                                <div styleName="mask">
                                    {
                                        selectTemplate?.templateId === template?.templateId && <img styleName="use" src={UseIcon}/>
                                    }
                                    {
                                        selectTemplate?.templateId !== template?.templateId && (
                                            <CusButton
                                                size="middle"
                                                className="view-btn"
                                                onClick={() => {
                                                    onChangeTemplate(template);
                                                }}>
                                                预览模板
                                            </CusButton>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </CusScrollBox>
        </div>
    )
}

export default Navigation;
