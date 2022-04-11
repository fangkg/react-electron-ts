/**
 * @description 内容
 * */
import React from "react";
import "./index.less";
import * as TemplateList from "@src/container/templates";
import Footer from "../Footer";
import CusScrollBox from "@common/components/CusScrollBox";
import {shell} from "electron";
import {useSelector} from "react-redux";
import CusEmpty from "@common/components/CusEmpty";
import EmptyPng from "@assets/icon/empty.png";
import CusButton from "@common/components/CusButton";

// 合法存在简历模板
const VALID_TEMPLATE = [0];

function StaticResume(){
    const HEADER_HEIGHT = 76; // 距离头部距离
    const height = document.body.clientHeight;
    const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);
    const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
    const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

    return (
        <div styleName="container">
            <CusScrollBox maxHeight={height - HEADER_HEIGHT}>
                {
                    isValidTemplate && isIncludeTemplate && (
                        <>
                            {
                                selectTemplate.templateIndex === 0 && <TemplateList.TemplateOne/>
                            }
                            <Footer/>
                        </>
                    )
                }
                {
                    isValidTemplate && !isIncludeTemplate && <LackDesc label="暂未开发此模板"/>
                }
                {
                    !isValidTemplate && <LackDesc label="暂无模板数据"/>
                }
            </CusScrollBox>
        </div>
    )
};

export default StaticResume;

const LackDesc = React.memo(({label}: {label: string}) => {
    return (
        <div styleName="empty">
            <CusEmpty imgSrc={EmptyPng} label={label}/>
            <div styleName="footer">
                <CusButton size="middle"
                    className="use-bth"
                    onClick={() => {
                        shell.openExternal('https://github.com/PDKSophia/visResumeMook/issues/4')
                    }}>
                    贡献模板
                </CusButton>
            </div>
        </div>
    )
})
