import React from "react";
import "./index.less";
import Logo from "@assets/test.jpg"
import {useHistory} from "react-router";
import {shell} from "electron";
import {ROUTER_KEY, ROUTER_ENTRY} from "@common/constants/router";
import {isHttpOrHttpsUrl} from "@common/utils/router";

function Root(){
    const history = useHistory();
    const onRouterToLink = (router: TSRouter.Item) => {
        if(isHttpOrHttpsUrl(router.url)){
            shell.openExternal(router.url)
        } else {
            history.push(router.url)
        }
    }

    return <div styleName="root">
        <div className="container">
            {/*<img src={Logo} alt=""/>*/}
            <div styleName="title">VisResumeMooK</div>
            <div styleName="tips">react electron ts项目</div>
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
