import { ResolveOptions } from "webpack";

export function buildresolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}
