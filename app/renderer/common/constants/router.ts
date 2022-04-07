const ROUTER = {
    root: "/",
    resume: "/resume"
}
export default ROUTER;

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume'
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
        url: 'https://github.com/fangkg/react-electron-ts.git',
        key: 'code',
        text: '源码'
    }
]
