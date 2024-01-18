import CompressionPlugin from 'compression-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

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
