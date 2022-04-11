import React, {useEffect} from "react";
import "./index.less";
import Logo from "@assets/logo.png"
import {useHistory} from "react-router";
import {shell} from "electron";
import {ROUTER_KEY, ROUTER_ENTRY} from "@common/constants/router";
import {isHttpOrHttpsUrl} from "@common/utils/router";
import {useSelector, useDispatch} from "react-redux";
import CusTheme from "@common/components/CusTheme";
import useThemeActionHooks from "@src/hooks/useThemeActionHooks";

function Root(){
    const appName = useSelector((state: any) => state.globalModel.appName);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            console.log('3s 后修改...');
            dispatch({
                type: 'globalModel/setStore',
                payload: {
                    key: 'appName',
                    values: 'visResumeMooK'
                }
            })
        }, 3000)
    }, [])
    useEffect(() => {
        console.log('appName:', appName);
    }, [appName]);
    const history = useHistory();
    const onRouterToLink = (router: TSRouter.Item) => {
        if(isHttpOrHttpsUrl(router.url)){
            shell.openExternal(router.url)
        } else {
            history.push(router.url)
        }
    }

    const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

    return <div styleName="root" style={{backgroundColor: currentTheme?.backgroundColor}}>
        <div className="container">
            <img src={Logo} alt=""/>
            <div styleName="title">VisResumeMooK</div>
            <div styleName="tips">react electron ts项目</div>
            <div styleName="theme">
                <CusTheme/>
            </div>
            <div styleName="action">
                {
                    ROUTER_ENTRY.map((router: TSRouter.Item) => {
                        return (
                            <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                                {router.text}
                            </div>
                        )
                    })
                }
            </div>
            <div styleName="copyright">
                <div styleName="footer">
                    <p styleName="copyright">
                        Copyright @ 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By test
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default Root;
