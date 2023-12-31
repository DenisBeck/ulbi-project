import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer' 
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins ({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
            _API_: JSON.stringify(apiUrl),
            _PROJECT_: JSON.stringify(project)
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ]

    if(isDev) {
        // plugins.push(new BundleAnalyzerPlugin({
        //     openAnalyzer: false
        // }));
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),);
        plugins.push(new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ],
        }),)
    }

    return plugins;
}
