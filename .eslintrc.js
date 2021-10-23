module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    `plugin:vue/vue3-essential`,
    `@vue/standard`,
    `prettier`,
  ],

  parserOptions: {
    ecmaVersion: 2021,
  },

  plugins: [`arca`],

  globals: {
    defineProps:  `readonly`,
    defineEmits:  `readonly`,
    defineExpose: `readonly`,
    withDefaults: `readonly`
  },

  rules: {
    'no-console':  process.env.NODE_ENV === `production` ? `warn` : `off`,
    'no-debugger': process.env.NODE_ENV === `production` ? `warn` : `off`,

    'arrow-parens':      `off`,
    'arca/import-align': [`error`, { collapseExtraSpaces: true }],
    'comma-dangle':      [`error`, `only-multiline`, { functions: `never` }],
    'curly':             [`error`, `multi-or-nest`, `consistent`],
    'indent':            [`error`, 2, {
      ArrayExpression:    `first`,
      FunctionExpression: { body: 1, parameters: `first` },
      ImportDeclaration:  `off`,
      MemberExpression:   `off`,
      SwitchCase:         1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      ignoreComments:     true
    }],
    'jsx-quotes':  [`error`, `prefer-single`],
    'key-spacing': [`error`, {
      align:      { beforeColon: false, afterColon: true, on: `value` },
      multiLine:  { beforeColon: false, afterColon: true },
      singleLine: { beforeColon: false, afterColon: true },
    }],
    'linebreak-style': `off`,
    'no-fallthrough':  `off`,
    'no-multi-spaces': [`error`, {
      ignoreEOLComments: true,
      exceptions:        {
        ExportNamedDeclaration: true,
        FunctionExpression:     true,
        ImportDeclaration:      true,
        ObjectExpression:       true,
        Property:               true,
        VariableDeclarator:     true
      }
    }],
    'no-unused-vars':               `off`,
    'no-var':                       `error`,
    'no-void':                      `off`,
    'prefer-const':                 `error`,
    'prefer-destructuring':         [`error`, { object: true, array: false }],
    'prefer-promise-reject-errors': `off`,
    'quote-props':                  [`error`, `consistent-as-needed`, { unnecessary: false }],
    'quotes':                       [`error`, `backtick`],
    'semi':                         [`error`, `never`],
    'template-curly-spacing':       `off`,

    'import/default':                    `error`,
    'import/export':                     `error`,
    'import/extensions':                 `off`,
    'import/first':                      `off`,
    'import/named':                      `error`,
    'import/namespace':                  `error`,
    'import/no-extraneous-dependencies': `off`,
    'import/no-unresolved':              `off`,
  },
}
