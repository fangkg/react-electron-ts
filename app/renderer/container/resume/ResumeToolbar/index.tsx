import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import "./index.less";
import CusScrollBox from "@common/components/CusScrollBox";
import {RESUME_TOOLBAR_LIST} from "@common/constants/resume";
import {onAddToolbar, onDeleteToolbar} from "@src/container/resume/ResumeToolbar/utils";
import Messager, {MESSAGE_EVENT_NAME_MAPS} from "@common/messager";


function ResumeToolbar(){
    const height = document.body.clientHeight;
    // 定义已添加、未添加模块
    const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
    const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(RESUME_TOOLBAR_LIST.length > 0){
            let _addToolbarList: TSResume.SliderItem[] = [];
            let _unAddToolbarList: TSResume.SliderItem[] = [];
            RESUME_TOOLBAR_LIST.forEach((s:TSResume.SliderItem) => {
                if(s.require) {
                    _addToolbarList.push(s);
                } else {
                    _unAddToolbarList.push(s);
                }
            });
            setAddToolbarList(_addToolbarList);
            setUnAddToolbarList(_unAddToolbarList);
            changeResumeToolbarKeys(_addToolbarList.map(s => s.key));
        }
    }, [])

    const changeResumeToolbarKeys = (moduleKeys: string[]) => {
        if(moduleKeys.length > 0){
            dispatch({
                type: 'templateModel/setStore',
                payload: {
                    key: 'resumeToolbarKeys',
                    values: moduleKeys
                }
            })
        }
    }

    // 添加模块
    const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
        const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
        setAddToolbarList(nextAddSliderList);
        changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
        const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
        setUnAddToolbarList(nextUnAddSliderList);
    }
    // 删除模块
    const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
        const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
        setAddToolbarList(nextAddSliderList);
        changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
        const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
        setUnAddToolbarList(nextUnAddSliderList);
    }
    return (
        <div styleName="slider">
            <CusScrollBox maxHeight={height - 180}>
                <div styleName="module">
                    {
                        !!addToolbarList.length && (
                            <div styleName="module">
                                <div styleName="title">
                                    <span styleName="line"/>
                                    已添加模块
                                </div>
                                <div styleName="content">
                                    {
                                        addToolbarList.map((addSlider: TSResume.SliderItem) => {
                                            // 遍历展示
                                            return (
                                                <div styleName="box"
                                                    key={addSlider.key}
                                                    onClick={() => {
                                                        Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                                                            form_name: addSlider.key
                                                        })
                                                    }}>
                                                    <div styleName="info">
                                                        <i styleName="icon"/>
                                                        <div styleName="text">
                                                            <div styleName="name">{addSlider.name}</div>
                                                            <div styleName="summary">{addSlider.summary}</div>
                                                        </div>
                                                        {
                                                            addSlider.require && <div styleName="tips">必选项</div>
                                                        }
                                                        {
                                                            !addSlider.require && (
                                                                <div styleName="action">
                                                                    <i styleName="edit" onClick={(e: React.MouseEvent) => {}}/>
                                                                    <i styleName="delete" onClick={(e: React.MouseEvent) => {
                                                                        e.stopPropagation && e.stopPropagation();
                                                                        onDeleteSliderAction(addSlider);
                                                                    }}/>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        !!unAddToolbarList.length && (
                            <div styleName="module">
                                <div styleName="title un-first">
                                    <span styleName="line"/>
                                    未添加模块
                                </div>
                                <div styleName="content">
                                    {
                                        unAddToolbarList.map((unAddSlider: TSResume.SliderItem) => {
                                            // 遍历展示
                                            return (
                                                <div styleName="box" key={unAddSlider.key} onClick={() => onAddSliderAction(unAddSlider)}>
                                                    <div styleName="info">
                                                        <i styleName="icon"/>
                                                        <div styleName="text">
                                                            <div styleName="name">{unAddSlider.name}</div>
                                                            <div styleName="summary">{unAddSlider.summary}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </CusScrollBox>
        </div>
    )
}

export default ResumeToolbar;
