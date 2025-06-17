import webpack from "webpack"
import path from "path"
import webpackDevServer from "webpack-dev-server"
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface IEnv {
    mode: "development" | "production"
}

export default (env: IEnv) => {
    const mode = env.mode || "development"
    const isDev = mode === "development"

    const config: webpack.Configuration = {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash:8].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                                },
                            },
                        },
                        "sass-loader",
                    ],
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules'
            ],
            mainFiles: ['index'],
            alias: {},
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[id].[contenthash].css',
            })
        ],
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? {
            port: 3000,
            historyApiFallback: true
        } : undefined
    }

    return config
}
