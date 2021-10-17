const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//.styles('node_modules/@fortawesome/fontawesome-free/css/fontawesome.css', 'public/css/appcss.css')
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copy('resources/images', 'public/images');
    // .copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
      /* next we configure the loaders */
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
              transpileOptions: {
                  transforms: {
                      dangerousTaggedTemplateString: true
                  }
              }
              }
            },
          ]
        },
        /*{
          test: /\.vue$/,
          loader: 'vue-loader'
        },*/
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        /*{
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // Requires sass-loader@^7.0.0
              options: {
                implementation: require('sass'),
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
              // Requires sass-loader@^8.0.0
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers'),
                  indentedSyntax: true // optional
                },
              },
            },
          ],
        },*/
          /*{
              test: /\.s(c|a)ss$/,
              use: [
                'vue-style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  // Requires sass-loader@^7.0.0
                  options: {
                    implementation: require('sass'),
                    fiber: require('fibers'),
                    indentedSyntax: true // optional
                  },
                  // Requires sass-loader@^8.0.0
                  options: {
                    implementation: require('sass'),
                    sassOptions: {
                      fiber: require('fibers'),
                      indentedSyntax: true // optional
                    },
                  },
                },
              ],
            },*/
          /* Other rules ... */
      ]
    },
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin()
	]
}