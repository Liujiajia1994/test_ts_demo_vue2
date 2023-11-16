module.exports = {
  plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: ['.vwignore', 'html', /^body$/],
          minPixelValue: 1,
          mediaQuery: true
      }
  }
};
