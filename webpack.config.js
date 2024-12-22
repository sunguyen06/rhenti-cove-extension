const path = require('path');

module.exports = {
    mode: 'development', // Switch to 'production' for optimized builds
    entry: {
        contentScriptBundle: [
            './src/content-scripts/leadHub.ts', // Process this first
            './src/content-scripts/coveAccountInfo.ts',
            './src/content-scripts/main.ts'    // Process this last
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist'),
        libraryTarget: 'window', // Attach all exports to the global window object
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map', // Debugging-friendly source maps
};
