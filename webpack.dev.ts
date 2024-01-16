import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration;
}

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
