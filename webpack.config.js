const meta = require('./package.json');

module.exports = (env, argv) => ({
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: meta.name,
    path: __dirname,
    library: 'gamepad',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devtool: argv.mode === 'production' ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'gamepad': `${__dirname}/src`,
    }
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    hot: false,
    compress: true,
    port: 8080,
  },
});
