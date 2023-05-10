import webpack, { WebpackPluginInstance } from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
  ];
}
