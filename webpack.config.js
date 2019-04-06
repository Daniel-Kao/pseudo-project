const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const autoprefixer = require('autoprefixer')

const config = {
  entry: {
    path: path.join(__dirname, 'src/entry/index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            "plugins": [
              ["react-hot-loader/babel"],
              ["import", { "libraryName": "antd", "style": "css" }]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              localIdentName: '[name]__[local]'
            }
          }, {
            loader: "less-loader" // compiles Less to CSS
          }]
      },
      {//CSS处理
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
        exclude: /node_modules/,
      },

      {//antd样式处理
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: "style-loader", },
          {
            loader: "css-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ]
}

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8080',
    contentBase: path.join(__dirname, 'dist'),
    overlay: {
      errors: true
    },
    hot: true,
    compress: true,
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
}

module.exports = config