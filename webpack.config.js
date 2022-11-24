const bundleName = 'ui-bundle'

const path = require('path')
const ZipPlugin = require('zip-webpack-plugin');
const FaviconsPlugin = require('favicons-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlHeadTags = (fileName, filterKey, filterValue) => {
  const compareTags = (htmlWebpackPlugin) => htmlWebpackPlugin.tags.headTags
      .filter((tag) => filterKey.split('.').reduce((obj, path) => obj ? obj[path] : false, tag) === filterValue)
      .join('')
      // It must be Handlebars template with root path as variable
      .replaceAll('uiRootPath', '{{{uiRootPath}}}')
  return new HtmlPlugin({
    publicPath: 'uiRootPath',
    templateContent: ({htmlWebpackPlugin}) => `${compareTags(htmlWebpackPlugin)}`,
    filename: `partials/${fileName}`,
    inject: false
  })
}

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css'
    }),
    new ZipPlugin({ filename: bundleName }),
    htmlHeadTags('head-icons.hbs', 'meta.plugin', 'favicons-webpack-plugin'),
    htmlHeadTags('head-styles.hbs', 'attributes.rel', 'stylesheet'),
    htmlHeadTags('head-local-scripts.hbs', 'tagName', 'script'),
    new FaviconsPlugin({
      logo: 'logo.svg',
      favicons: { appName: 'Taymyr' },
      prefix: 'assets/[contenthash]/',
      inject: htmlPlugin => path.basename(htmlPlugin.options.filename).endsWith('head-icons.hbs')
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/layouts', to: 'layouts' },
        { from: 'src/partials', to: 'partials' },
      ]
    }),
  ],
  performance: {
    assetFilter: (filename) => !filename.startsWith(bundleName)
  }
};
