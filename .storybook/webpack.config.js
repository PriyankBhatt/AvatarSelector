const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader : 'postcss-loader',
            options: {
              parser: 'postcss-scss',
              plugins: function() {
                return [
                  require('autoprefixer')()
                ];
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
}
