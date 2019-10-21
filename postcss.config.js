module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: './src/styles/_variables.css'
    },
    cssnano: {}
  }
}
