import { Configuration } from 'webpack';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildresolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.build,
        clean: true
    },
    plugins: buildPlugins(options),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildresolvers(),
}
}
