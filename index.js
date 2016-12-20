var isWin = /^win/.test(process.platform);

module.exports = {
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		ecmaVersion: 8,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		'accessor-pairs': 'error',
		'array-bracket-spacing': 'error',
		'arrow-spacing': ['error', { before: true, after: true }],
		'block-spacing': ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'constructor-super': 'error',
		'curly': ['error', 'multi-line'],
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eol-last': 'error',
		'eqeqeq': ['error', 'allow-null'],
		'func-call-spacing': 'error',
		'generator-star-spacing': ['error', { before: true, after: true }],
		'guard-for-in': 1,
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': ["error", isWin ? "windows" : "unix"],
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-class-assign': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': ['error', 'functions'],
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implied-eval': 'error',
		'no-inner-declarations': ['error', 'functions'],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-obj-calls': 'error',
		'no-octal-escape': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-return-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-undef': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-vars': ['error', { args: 'none' }],
		'no-useless-call': 'error',
		'no-with': 'error',
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', { initialized: 'never' }],
		'operator-linebreak': ['error', 'before'],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'semi-spacing': 'error',
		'semi': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': 'error',
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': ['error', 'always', { exceptions: ['!'] }],
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'wrap-iife': ['error', 'any'],
		'yoda': 'error',
	},
};

