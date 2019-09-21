const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/main.js'),
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      filename: 'build.js',
      path: path.join(__dirname, '/dist')},
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }]
    },
    plugins:[
      new HWP({
          template: path.join(__dirname,'index.html'),
          favicon: "./static/images/favicon.ico"
        })
    ]
}
