import React, {useEffect} from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import CacheRoute, {CacheSwitch} from "react-router-cache-route";
import Root from "@src/container/root";
import Resume from "@src/container/resume";
import ROUTER from "@common/constants/router";
import TemplateList from "@src/container/templateList";
import useReadDirAssetsTemplateHooks from "@src/hooks/useReadDirAssetsTemplateHooks";
import useThemeActionHooks from "@src/hooks/useThemeActionHooks";
import {ipcRenderer} from "electron";

function Router(){
    const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
    const initThemeConfig = useThemeActionHooks.useInitThemeConfig();

    useEffect(() => {
        initThemeConfig();
        readDirAssetsTemplateHooks();
    }, []);
    return (
        <HashRouter>
            <CacheSwitch>
                <CacheRoute path={ROUTER.root} exact component={Root}/>
                <CacheRoute path={ROUTER.resume} exact component={Resume}/>
                <CacheRoute path={ROUTER.templateList} exact component={TemplateList}/>
                <Redirect from={ROUTER.root} exact to={ROUTER.root}/>
            </CacheSwitch>
        </HashRouter>
    )
}

export default Router;
