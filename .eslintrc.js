module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"jest": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"babel/no-invalid-this": 0,
		"react/jsx-uses-vars": 1,
		"react/jsx-uses-react": 1,
		"react/react-in-jsx-scope": 1
	}
};