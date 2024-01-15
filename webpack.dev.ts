import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common';

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'dev-bundle.js',
  },
  devServer: {
    client: {
      logging: 'info',
      overlay: true,
    },
    compress: true,
    open: true,
    static: './dist',
  },
  stats: {
    errorDetails: true,
  },
};

export default merge(commonConfig, devConfig);
