const meta = require('./package.json');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: meta.name,
    path: __dirname,
    library: 'gamepad',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
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
  }
};
