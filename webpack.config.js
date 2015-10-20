module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /(node_modules|bower_components)/, loader: "babel" }
        ]
    },
    externals: {
        'react': 'React',
        'underscore': '_'
    }
}