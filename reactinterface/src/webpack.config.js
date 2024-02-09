// webpack.config.js or webpack.config.prod.js
module.exports = {
    // ... other webpack configuration
    module: {
      rules: [
        // ... other rules
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };
  