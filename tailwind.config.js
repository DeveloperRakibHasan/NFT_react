module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      xm: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
       
      },
      // screens: {
      //   xm: '100%',
      //   sm: '540px',
      //   md: '728px',
      //   lg: '984px',
      //   xl: '1170px',
      //   '2xl': '1410px',
        
      // },
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '728px',
          },
          '@screen lg': {
            maxWidth: '984px',
          },
          '@screen xl': {
            maxWidth: '1170px',
          },
          '@screen 2xl': {
            maxWidth: '1410px',
          },
        }
      })
    }
  ],
}
