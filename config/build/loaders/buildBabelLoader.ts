/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type webpack from 'webpack'
import type { BuildBabelLoaderProps } from '../types/config'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

export function buildBabelLoader({isDev, isTsx}: BuildBabelLoaderProps): webpack.RuleSetRule {
    const isProd = !isDev
    return {
        test: isTsx ? /\.(js|jsx|tsx)$/ : /\.(js|js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ],
                    [
                        "@babel/plugin-transform-typescript",
                        { isTsx }
                    ],
                    "@babel/plugin-transform-runtime",
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean)
            }
        }
    }
}
