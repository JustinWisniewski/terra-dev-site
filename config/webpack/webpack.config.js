const merge = require('webpack-merge');
const defaultWebpackConfig = require('./terra-toolkit.webpack.config');
const terraDevSiteConfig = require('./terra-dev-site.webpack.config');

const mergedConfig = (env, argv) => (
  merge.strategy({
    'resolve.modules': 'prepend',
  })(defaultWebpackConfig(env, argv), terraDevSiteConfig(env, argv))
);

module.exports = mergedConfig;
