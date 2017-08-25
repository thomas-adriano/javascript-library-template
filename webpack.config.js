const webpack = require("webpack");
const path = require("path");
const ROOT_PATH = __dirname;

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "template-library-project.js",
        library: "templateLibraryProjectModule",
        libraryTarget: "umd",
        umdNamedDefine: true,
        path: path.join(ROOT_PATH, "build")
    },
    externals: [],
    module: {
        rules: rules()
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")]
    },
    plugins: plugins()
};

function rules() {
    return [
        {
            test: /.js$/,
            exclude: /(node_modules)/,
            enforce: "pre",
            use: "jshint-loader"
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: "babel-loader"
        }
    ];
}

function plugins() {
    return [
    ];
}