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
