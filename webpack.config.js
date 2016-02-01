module.exports = {
  entry: './src/client.js',
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
      }
    ]
  }
}
