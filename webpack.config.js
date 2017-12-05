const path = require('path')
const nodeExternals = require('webpack-node-externals');

const client = {
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  }
}

const server = {
  entry: path.join(__dirname, 'src', 'server.js'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname)
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
    ]
  }
}

module.exports = [client, server]