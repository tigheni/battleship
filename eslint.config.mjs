import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,

    // Add your own rules here
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'no-console': 'warn',
            'react/prop-types': 'off',
        },
    },
];
