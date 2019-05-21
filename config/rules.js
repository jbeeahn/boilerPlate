const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const devMode = process.env.NODE_ENV === "development"

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  },
  {
    test: /\.(s?css)$/,
    use: [
      devMode ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          importLoaders: 2
        }
      },
      "postcss-loader",
      { loader: "sass-loader", query: {} }
    ]
  }
]
