module.exports = {
    presets: [
        '@babel/preset-env', // 根据配置的目标浏览器或运行环境选择对应的语法包，从而将代码进行转换
        '@babel/preset-react', // react语法包，可以使用react Es6 class component写法，支持jsx tsx语法格式
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-runtime', // 官方提供插件减少冗余代码
        [
            '@babel/plugin-transform-modules-commonjs', // 将ESMAScript modules转换成CommonJS
            {
                allowTopLevelThis: true,
                loose: true,
                lazy: true
            }
        ],
        [
            'babel-plugin-react-css-modules',
            {
                exclude: 'node_modules',
                webpackHotModuleReloading: true,
                generateScopedName: '[name]__[local]__[hash:base64:5]',
                autoResolveMultipleImports: true,
                filetypes: {
                    '.less': {
                        syntax: 'postcss-less'
                    }
                }
            }
        ]
    ]
}
