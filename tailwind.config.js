module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ], 
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        gridTemplateColumns: {
          '13': 'repeat(13, minmax(0, 1fr))'
        },
        minHeight: (theme) => ({
          ...theme('spacing')
        }),
        minWidth: {
          '1000': '1000px'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }