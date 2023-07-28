module.exports = {
	sourceType: "unambiguous",
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					chrome: 100,
				},
			},
		],
		"@babel/preset-typescript",
		["@babel/preset-react", { runtime: "automatic" }],
	],
	plugins: ["babel-plugin-styled-components"],
};
