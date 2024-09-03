import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  console.log(paths.src);
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src,
    },
  };
}
