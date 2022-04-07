module.exports = {
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
    ],
    globals: {
        // 填入项目需要的全局变量
        __dirname: false // 全局变量__dirname不允许重新赋值
    },
    rules: {
        'no-undefined': 'warn',
        'no-debugger': 'off',
        complexity: ['error', {max: 99}],
        // 项目需要的个性化设置
        // @fixable一个缩进必须用两个空格替代
        indent: [
            1,
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // @fixable jsx的children缩进必须为两个空格
        'react/jsx-indent': [1, 2],
        // @fixable jsx的props缩进必须为两个空格
        'react-jsx-indent-props': [1, 2],
        // 不使用ref
        'react/no-string-refs': 1,
        // 在string里不出现模板符号
        'no-template-curly-in-string': 1,
        '@typescript-eslint/prettier-optional-chain': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-duplicate-imports': 'off',
        'react/no-unsafe': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
        'react/jsx-key': 0,
        'no-undef': 0
    }
}
