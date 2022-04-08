/**
 * @description 弹窗组件
 * */
import React from "react";
import "./index.less";
import CusButton from "@common/components/CusButton";
import {IDialogModal} from "@common/components/CusModal/types";

function Index({title, width, className, showFooter, renderFooter, config = {}, eleRef, children, childStyle}: IDialogModal){
        const {cancelBtn = {isShow: true}, submitBtn = {isShow: true}} = config;
        return (
            <div styleName="vis-mask">
                <div styleName="center">
                    <div styleName="vis-dialog-box" className={className} style={{width: width || 760}} ref={eleRef}>
                        <div styleName="vis-dialog-header">
                            {title || 'VisResumeMooK 提示'}
                        </div>
                        <div styleName="vis-dialog-close" onClick={() => { cancelBtn?.callback && cancelBtn.callback()}}/>
                        <div styleName="vis-dialog-content" style={childStyle}>
                            {children}
                        </div>
                        {
                            showFooter && (renderFooter || (
                                <div styleName="vis-dialog-footer">
                                    {
                                        cancelBtn?.isShow && (
                                            <CusButton size="middle"
                                                className="vis-dialog-footer-btn vis-dialog-footer-cancel-btn"
                                                onClick={() => {
                                                    cancelBtn?.callback && cancelBtn.callback();
                                                }}>
                                                {cancelBtn?.text || '取消'}
                                            </CusButton>
                                        )
                                    }
                                    {
                                        submitBtn?.isShow && (
                                            <CusButton size="middle"
                                                className="vis-dialog-footer-btn vis-dialog-footer-submit-btn"
                                                onClick={() => {
                                                    submitBtn?.callback && submitBtn.callback();
                                                }}>
                                                {submitBtn?.text || '确定'}
                                            </CusButton>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
}

export default Index;
