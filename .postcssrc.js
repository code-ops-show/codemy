module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {
      grid: true
    },
    tailwindcss: require('./tailwind.ts'),
    'postcss-modules': {
      globalModulePaths: ['/styles/global/']
    }
  }
}
