const path = require('path')

module.exports = (env, argv) => ({
  entry: './src/main.js',
  output: {
    path: argv.mode === 'production'
      ? path.resolve(__dirname, 'dist')
      : path.resolve(__dirname, 'dev'),
    filename: argv.mode === 'production'
      ? 'main.min.js'
      : 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
})
