const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const src = __dirname;
const dist = path.resolve(__dirname, 'dist');

module.exports = (env) => {
    return {
        target: 'web',
        externalsPresets: { node: true },
        externals: {
            stream: 'stream',
            xmlhttprequest: 'xmlhttprequest'
        },
        mode: 'development',
        context: __dirname,
        devtool: false,
        entry: {
            backlog: path.resolve(__dirname, 'src', 'index.ts')
        },
        output: {
            libraryTarget: 'assign',
            library: 'nulab',
            path: dist,
            filename: '[name].js'
        },
        optimization: {
            minimize: true,
            removeAvailableModules: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    extractComments: false,
                    terserOptions: {
                        ecma: 2015,
                        warnings: false,
                        mangle: {},
                        compress: {
                            drop_console: true,
                            drop_debugger: true
                        },
                        output: {
                            beautify: true,
                            braces: true,
                            comments: false
                        },
                        keep_classnames: true,
                        keep_fnames: true,
                    }
                })
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: [
            new FileManagerPlugin({
                events: {
                    onStart: {
                        delete: [dist],
                    },
                    onEnd: {
                        copy: [
                            { source: 'appsscript.json', destination: `${dist}/appsscript.json` },
                            { source: `${src}/*.gs`.replace(/\\/g, '/'), destination: dist }
                        ]
                    },
                },
            }),
            new GasPlugin({
                comments: false,
                source: 'gslack.app'
            })
        ]
    };
}