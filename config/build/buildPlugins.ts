import webpack, { WebpackPluginInstance } from 'webpack';

import { BuildOptions } from './types/config';

import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentnash:8].css',
      chunkFilename: 'css/[name].[contentnash:8].css',
    }),
  ];
}
