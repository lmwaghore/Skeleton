var path = require("path");
var DIST_DIR = path.join(__dirname, "/client/public");
var SRC_DIR = path.join(__dirname, "/client/src");

module.exports = {
	mode: "development",
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: "bundle.js",
		path: DIST_DIR,
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/react", "@babel/env"],
					plugins: ["@babel/plugin-proposal-class-properties"],
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devtool: false,
};
