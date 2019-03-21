module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {
      grid: true
    },
    tailwindcss: require('./tailwind.js'),
    'postcss-modules': {
      globalModulePaths: ['/styles/global/']
    }
  }
}
