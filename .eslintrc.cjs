/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
	},
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended'],
	"rules": {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error"
	  }
}
