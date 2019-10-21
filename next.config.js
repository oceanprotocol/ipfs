const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')()

// eslint-disable-next-line no-unused-vars
const withSvgr = (nextConfig = {}, nextComposePlugins = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true
            }
          }
        ]
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}

module.exports = withSvgr(
  withMDX(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]'
      }
    })
  )
)
