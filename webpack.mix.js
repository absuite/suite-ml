const { join } = require('path')
const { mix } = require('laravel-mix');
const fs = require('fs-extra');

fs.emptyDirSync(join(__dirname, '/public/js/chunks'));

const resolvePath = (...args) => {
  const path = [__dirname, '/resources/assets/js/vendor', ...args]

  return join.apply(null, path)
}
const resolveAppPath = () => {
  const path = [__dirname, '/resources/assets/js']

  return join.apply(null, path)
}
mix.options({
  extractVueStyles: true,
  purifyCss: false,
  uglify: {
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_console: true,
      },
      output: {
        comments: false
      }
    }
  },
  clearConsole: false
});
mix.webpackConfig({
  output: {
    publicPath: "/",
    chunkFilename: 'js/chunks/[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      // 'gmf': resolveGmfPath()
      'gmf': resolvePath('gmf-sys'),
      'app': resolveAppPath()
    }
  },
});
mix.js('resources/assets/js/app.js', 'public/js')
  .extract(['axios', 'vue', 'vue-router','vuex','raf']);
mix.sass('resources/assets/sass/app.scss', 'public/css');

mix.version();