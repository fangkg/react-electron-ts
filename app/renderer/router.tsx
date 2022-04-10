import React, {useEffect} from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Root from "@src/container/root";
import Resume from "@src/container/resume";
import ROUTER from "@common/constants/router";
import TemplateList from "@src/container/templateList";
import useReadDirAssetsTemplateHooks from "@src/hooks/useReadDirAssetsTemplateHooks";

function Router(){
    const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
    useEffect(() => {
        readDirAssetsTemplateHooks();
    }, []);
    return (
        <HashRouter>
            <Switch>
                <Route path={ROUTER.root} exact>
                    <Root/>
                </Route>
                <Route path={ROUTER.resume} exact>
                    <Resume/>
                </Route>
                <Route path={ROUTER.templateList} exact>
                    <TemplateList/>
                </Route>
            </Switch>
            {/* 重定向到首页*/}
            <Redirect to={ROUTER.root}/>
        </HashRouter>
    )
}

export default Router;
