import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: {...globals.browser, ...globals.node}
        }
    },
    pluginJs.configs.recommended,
    {
        rules: {
            'indent': [
                'error',
                4,
                { 'SwitchCase': 1 }
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always'
            ],
            'no-console': [
                'error',
                { 'allow': ['info', 'error'] }
            ],
            'no-inline-comments': [
                'error'
            ],
            'spaced-comment': [
                'error',
                'always'
            ]
        }
    }
];
