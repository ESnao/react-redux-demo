const { injectBabelPlugin, getLoader } = require('react-app-rewired');
const path = require('path');
const theme = require('./theme')

const fileLoaderMatcher = function(rule) {
  return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
}

const resolve = function(dir) {
    return path.join(__dirname, '.', dir)
}


module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);

  config.module.rules[1].oneOf.unshift({
    test: /\.less$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
      {
        loader: require.resolve('less-loader'),
        options: {
          // theme vars, also can use theme.js instead of this.
          modifyVars: theme,
        },
      },
    ]
  });
  let l = getLoader(config.module.rules, fileLoaderMatcher);
  l.exclude.push(/\.less$/);

  config.resolve.alias = {
    '@': resolve('src'),
    'components': resolve('src/components'),
    'services': resolve('src/services'),
    'styles': resolve('src/styles'),
    'utils': resolve('src/utils'),
    'views': resolve('src/views'),
  }

  return config;
};