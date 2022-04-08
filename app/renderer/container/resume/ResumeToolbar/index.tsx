import React from "react";
import "./index.less";
import CusScrollBox from "@common/components/CusScrollBox";
import {RESUME_TOOLBAR_LIST} from "@common/constants/resume";

function ResumeToolbar(){
    const height = document.body.clientHeight;

    return (
        <div styleName="slider">
            <CusScrollBox maxHeight={height - 180}>
                <div styleName="module">
                    全部模块
                    <div styleName="content">
                        {
                            RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
                                return (
                                    <div styleName="box" key={toolbar.key}></div>
                                )
                            })
                        }
                    </div>
                </div>
            </CusScrollBox>
        </div>
    )
}

export default ResumeToolbar;
