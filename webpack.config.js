const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  performance: { hints: false },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ],
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'static'),
    watchContentBase: true,
    open: true
  }
}
