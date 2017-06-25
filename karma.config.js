const webpack = require('karma-webpack')

const karmaCfg = {
    singleRun: !(process.argv.indexOf('--watch') > -1),
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    reporters: ['spec'],
    plugins: [
        webpack,
        'karma-mocha',
        'karma-spec-reporter',
        'karma-phantomjs-launcher'
    ],
    files: [
        'src/**/*__test__.js'
    ],
    preprocessors: {
        'src/**/*__test__.js': ['webpack']
    },
    webpack: require('./webpack.config.js'),
    webpackServer: {
        noInfo: true
    }
};

module.exports = function(config) {
    config.set(karmaCfg);
}