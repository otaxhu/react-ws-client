module.exports = {
	rules: {
		"@stylistic/indent": [
			"error",
			"tab",
		],
		"@stylistic/comma-dangle": [
			"error",
			"always-multiline",
		],
		"@stylistic/comma-style": "error",
		"@stylistic/quotes": [
			"error",
			"double",
		],
		"@stylistic/jsx-quotes": "error",
		"@stylistic/semi": "error",
		"@stylistic/semi-style": "error",
		"@stylistic/no-extra-semi": "error",
		"@stylistic/dot-location": [
			"error",
			"property",
		],
		"@stylistic/max-statements-per-line": "error",
		"@stylistic/no-trailing-spaces": "error",
		"@stylistic/no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
			},
		],
		"@stylistic/no-multi-spaces": "error",
		"@stylistic/arrow-spacing": "error",
		"@stylistic/space-before-blocks": "error",
		"@stylistic/space-in-parens": "error",
		"@stylistic/comma-spacing": "error",
		"@stylistic/func-call-spacing": "error",
		"@stylistic/brace-style": [
			"error",
			"1tbs",
			{
				"allowSingleLine": true,
			},
		],
		"@stylistic/space-before-function-paren": [
			"error",
			{
				"anonymous": "always",
				"named": "never",
				"asyncArrow": "always"
			}
		],
		"@stylistic/implicit-arrow-linebreak": "error",
		"@stylistic/space-infix-ops": "error",
		"@stylistic/object-curly-newline": [
			"error",
			{
				"multiline": true,
				"consistent": true,
			},
		],
		"@stylistic/object-curly-spacing": [
			"error",
			"always",
		],
		"@stylistic/no-whitespace-before-property": "error",
		"@stylistic/keyword-spacing": "error",
		"@stylistic/key-spacing": [
			"error",
			{
				"align": "value",
			},
		],
		"@stylistic/computed-property-spacing": "error",
		"@stylistic/object-property-newline": "error",
		"@stylistic/template-curly-spacing": "error",
		"@stylistic/switch-colon-spacing": "error",
		"@stylistic/rest-spread-spacing": "error",
		"@stylistic/array-bracket-spacing": "error",
		"@stylistic/array-bracket-newline": "error",
		"@stylistic/jsx-curly-spacing": [
			"error",
			{
				"children": true,
			},
		],
		"@stylistic/jsx-equals-spacing": "error",
		"@stylistic/jsx-closing-tag-location": "error",
		"@stylistic/jsx-closing-bracket-location": "error",
		"@stylistic/jsx-indent": [
			"error",
			"tab",
			{
				"checkAttributes": true,
				"indentLogicalExpressions": true,
			},
		],
		"@stylistic/jsx-curly-newline": [
			"error",
			{
				"multiline": "forbid",
				"singleline": "forbid",
			},
		],
		"@stylistic/jsx-tag-spacing": [
			"error",
			{
				"beforeClosing": "never",
			},
		],
		"@stylistic/jsx-child-element-spacing": "error",
		"@stylistic/jsx-one-expression-per-line": [
			"error",
			{
				"allow": "single-child",
			}
		],
	}
};
