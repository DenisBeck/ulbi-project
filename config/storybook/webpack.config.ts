import path from 'path';
import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { DefinePlugin } from 'webpack';

export default ({config}: {config: webpack.Configuration}): webpack.Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.module.rules = config.module?.rules.map((rule: RuleSetRule) => {
        if (((typeof (rule.test as string) === 'string') ? (rule.test as string) : 'svg').includes('svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(new DefinePlugin({
        _IS_DEV_: JSON.stringify(true),
        _API_: JSON.stringify(''),
    }))

    return config;
}