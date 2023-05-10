import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  // The boot sequence matters
  return [typescriptLoader];
}
