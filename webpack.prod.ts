import path from 'path';
import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

import commonConfig from './webpack.common';

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'prod-bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new CompressionPlugin()],
};

export default merge(commonConfig, prodConfig);
