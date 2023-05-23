import {DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance} from "webpack";

import {BuildOptions} from "./types/config";

import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contentnash:8].css",
      chunkFilename: "css/[name].[contentnash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
  
  if (isDev) {
    return [
      ...plugins,
      new ReactRefreshPlugin(),
      new HotModuleReplacementPlugin(),
    ];
  } else {
    return plugins;
  }
}
