const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './client/src/index.jsx',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Production',
      template: 'template.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', ".json", ".css"],
  },
};
