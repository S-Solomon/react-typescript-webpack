const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)
    return config
}





// npm i -D webpack-merge
// npm i -D @babel/plugin-transform-runtime @pmmmwh/react-refresh-webpack-plugin react-refresh





// npmi -D css-loader style-loader
// npm install sass-loader sass webpack --save-dev

// SASS Configuration for your production environment. 
// npm i -D mini-css-extract-plugin
