import path from 'path';
import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

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
        if ((rule.test as string).includes('svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // if(config.module?.rules !== undefined && config.module.rules.length > 0) {
    //     config.module.rules = config.module?.rules?.filter(rule => {
    //         return typeof rule !== 'string' && 'test' in rule && rule.test === 'string'
    //     })
    //         .map((rule) => {
    //             console.log(rule)
    //             // if((rule.test as RegExp).includes('svg')) {
    //             //     return {...rule, exclude: /\.svg$/i}
    //             // }
    //             return rule;
    //         })
    // }
    
    // config.module?.rules?.push({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack']
    // });
    config.module?.rules?.push(buildCssLoader(true));

    return config;
}