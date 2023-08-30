import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
            _API_: JSON.stringify(apiUrl),
            _PROJECT_: JSON.stringify(project)
        })
    ]

    if(isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins;
}
