const path = require('path')
const pkg = require('./package.json')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { BannerPlugin, DefinePlugin } = require('webpack')

const buildTime = new Date()
const gitRevision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()

module.exports = ({ mode, analyze }) => {
  const smp = new SpeedMeasurePlugin({ disable: !analyze })
  mode = mode.toLowerCase()
  return smp.wrap({
    mode,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[fullhash].js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './index.html' }),
      new BannerPlugin({
        banner: `build-time=${buildTime};version=${pkg.version}`,
      }),
      new DefinePlugin({
        __VERSION__: `'${pkg.version}'`,
        __BUILD_DATE__: `'${buildTime}'`,
        __REVISION__: `'${gitRevision}'`,
      }),
      /* new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
      }), */
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: mode === 'production',
        statsFilename: './reports/stats.json',
      }),
    ],
    devtool: 'source-map',
    resolve: {
      alias: {
        Common: [path.resolve(__dirname, './src/common/')],
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss', 'css'],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.scss?$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      writeToDisk: true,
      historyApiFallback: true,
    },
  })
}
