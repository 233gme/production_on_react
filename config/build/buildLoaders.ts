import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
  
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
  
  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }
  
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[hash:base64:3]____[name]__[local]' : '[hash:base64:8]'
          },
        }
      },
      'sass-loader',
    ]
  }
  
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  const babelLoader = {
    test: /\.m?(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        "plugins": [
          ["i18next-extract", {
            locales: ["en", "ru"],
            keyAsDefaultValue: false,
          }],
        ]
      }
    }
  };
  
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ]
}
