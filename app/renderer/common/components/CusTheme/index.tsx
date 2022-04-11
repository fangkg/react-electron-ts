/**
 * @description 主题
 * */
import React from "react";
import "./index.less";
import {useSelector} from "react-redux";
import useThemeActionHooks from "@src/hooks/useThemeActionHooks";

function CusTheme(){
    const themeList = useSelector((state: any) => state.themeModel.themeList);
    // 通过hooks得到当前状态和一个更新状态的函数
    const [currentTheme, setCurrentTheme] = useThemeActionHooks.useGetCurrentTheme();
    return (
        <div styleName="box">
            {
                themeList && themeList.length > 0 && [...themeList].map((t: TSTheme.Item, index: number) => {
                    return (
                        <span key={index}
                              style={{backgroundColor: t.backgroundColor}}
                              styleName={`${currentTheme.id === t.id ? 'active' : ''}`}
                              onClick={() => {
                                  setCurrentTheme && setCurrentTheme(t, true);
                              }}/>
                    )
                })
            }
        </div>
    )
}

export default CusTheme;
