module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  // settings: {
  // 	next: {
  // 		rootDir: ["apps/*/"],
  // 	},
  // },
  ignorePatterns: [
    'node_modules/',
    'build/',
    '.next/',
    '!.prettierrc.js',
    '!.eslintrc.json',
    '!.babelrc'
  ]
}
