import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack'

import { type BuildOptions } from './types/config'

import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

// NEED RESOLVE
// import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins (
  { paths, isDev }: BuildOptions
): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentnash:8].css',
      chunkFilename: 'css/[name].[contentnash:8].css'
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    return [
      ...plugins,
      // new ReactRefreshPlugin(),
      new HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({ openAnalyzer: false })
    ]
  } else {
    return plugins
  }
}
