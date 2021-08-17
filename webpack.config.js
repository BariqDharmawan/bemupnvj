const { join } = require('path')
const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('./public/assets')

Encore.setPublicPath('/assets')

Encore.addEntry('app', './resources/assets/js/app.js')

Encore.copyFiles({
  from: './resources/assets/img',
  to: 'img/[path][name].[ext]',
})

/*
|--------------------------------------------------------------------------
| Split shared code
|--------------------------------------------------------------------------
|
| Instead of bundling duplicate code in all the bundles, generate a separate
| bundle for the shared code.
|
| https://symfony.com/doc/current/frontend/encore/split-chunks.html
| https://webpack.js.org/plugins/split-chunks-plugin/
|
*/
// Encore.splitEntryChunks()

Encore.disableSingleRuntimeChunk()

Encore.cleanupOutputBeforeBuild()

Encore.enableSourceMaps(!Encore.isProduction())

Encore.enableVersioning(Encore.isProduction())

Encore.configureDevServerOptions((options) => {
  /**
   * Normalize "options.static" property to an array
   */
  if (!options.static) {
    options.static = []
  } else if (!Array.isArray(options.static)) {
    options.static = [options.static]
  }

  /**
   * Enable live reload and add views directory
   */
  options.liveReload = true
  options.static.push({
    directory: join(__dirname, './resources/views'),
    watch: true,
  })

  /**
   * Reset client as webpack encore is using an unallowed "host"
   * property.
   */
  options.client = {}
})

Encore.enableSassLoader()
// Encore.enableLessLoader()
// Encore.enableStylusLoader()

Encore.enablePostCssLoader()
// Encore.configureCssLoader(() => {})

/*
|--------------------------------------------------------------------------
| Enable Vue loader
|--------------------------------------------------------------------------
|
| Uncomment the following lines of code to enable support for vue. Also make
| sure to install the required dependencies.
|
*/
// Encore.enableVueLoader(() => {}, {
//   version: 3,
//   runtimeCompilerBuild: false,
//   useJsx: false
// })

const config = Encore.getWebpackConfig()
config.infrastructureLogging = {
  level: 'warn',
}
config.stats = 'errors-warnings'

module.exports = config
