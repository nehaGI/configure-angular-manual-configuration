const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: './src/main-standalone.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: '@ngtools/webpack',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // Add other rules as necessary
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new AngularWebpackPlugin({
      tsconfig: 'tsconfig.json',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4200,
    open: true
  }
};
