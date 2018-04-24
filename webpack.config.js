module.exports = {
  entry: ['./index.js'],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'adagios-snapshot.min.js',
  },
  devServer: {
    contentBase: './build',
  },
};
