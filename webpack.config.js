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
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
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