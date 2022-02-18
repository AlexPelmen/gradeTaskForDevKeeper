import path from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration} from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin = require("copy-webpack-plugin");
import {CleanWebpackPlugin} from "clean-webpack-plugin";

const config: Configuration = {
    entry: "./src/index.tsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
        devMiddleware: {
            writeToDisk: true,
        },
    } as DevServerConfiguration,
    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "static"),
                    to: path.resolve(__dirname, "dist"),
                },
                {
                    from: path.resolve(__dirname, "static/img"),
                    to: path.resolve(__dirname, "dist/img"),
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
};

export default config;
