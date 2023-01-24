module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'jsx-a11y', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    semi: ['error', 'never'],
    'linebreak-style': 'off',
    'max-len': ['error', 140],
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'spaced-comment': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-useless-path-segments': 'off',
    'import/extensions': 'off',
    'import/no-commonjs': 'error',
    'no-param-reassign': 'off',
    'dot-notation': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'VariableDeclarator > ObjectPattern ObjectPattern',
        message: 'Вложенная деструктуризация сложно воспринимается!',
      },
    ],
    'no-restricted-imports': ['error', 'lodash'],
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-destructuring': 'off',
    'object-curly-newline': [
      'off',
      {
        ObjectExpression: { minProperties: 0, multiline: true },
        ObjectPattern: { minProperties: 0, multiline: true },
      },
    ],
    'function-paren-newline': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    'padded-blocks': ['error', 'never'],
    camelcase: ['error', { properties: 'never' }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'arrow-parens': 'off',
    'no-mixed-operators': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-restricted-globals': 'off',
    'no-multi-spaces': 'error',
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-escape': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-return-assign': ['error', 'except-parens'],
    'lines-between-class-members': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'max-classes-per-file': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: 'const' },
      { blankLine: 'always', prev: 'const', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'if', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: 'if' },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^react',
            '^@?\\w',
            '^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)',
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
}
