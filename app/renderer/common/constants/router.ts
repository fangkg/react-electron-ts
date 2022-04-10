const ROUTER = {
    root: "/",
    resume: "/resume",
    templateList: "/templateList"
}
export default ROUTER;

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume',
    templateList: 'templateList'
}

// 入口模块 TS定义类型必须为TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
    {
        url: 'https://github.com/fangkg/react-electron-ts.git',
        key: 'intro',
        text: '介绍'
    },
    {
        url: ROUTER.resume,
        key: ROUTER_KEY.resume,
        text: '简历'
    },
    {
        url: ROUTER.templateList,
        key: ROUTER_KEY.templateList,
        text: '模板'
    },
    {
        url: 'https://github.com/fangkg/react-electron-ts.git',
        key: 'code',
        text: '源码'
    }
]
