import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
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
            _IS_DEV_: JSON.stringify(isDev)
        })
    ]

    // if(isDev) {
    //     plugins.push(new webpack.HotModuleReplacementPlugin());
    //     plugins.push(new BundleAnalyzerPlugin({
    //         openAnalyzer: false,
    //     }))
    // }

    return plugins;
}
