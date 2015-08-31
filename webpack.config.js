module.exports = {
  entry: {
    app: ['./jsx/HotelsList.jsx']
  },
  output: {
    path: './assets',
    publicPath: 'assets',
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    colors: true,
    hot: false,
    inline: true,
    progress: true,
    port: 9090
  },
};