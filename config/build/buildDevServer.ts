import { type BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    const { port, paths } = options
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: false
        },
        watchFiles: paths.src
    }
}
