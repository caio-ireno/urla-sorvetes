import { extendTheme } from '@chakra-ui/react' // Importe do chakra



const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: 'cyan.50',
        fonts: "Fredoka One"
      },
    }),
  },

  fonts: {
      body: "Fredoka One",
      heading: 'Times New Roman, sans-serif',
      mono: 'Times New Roman, sans-serif', 
    },

  breakpoints: {
      xsm:'240px',
      sm: '320px',
      md: '768px',
      lg: '1000px',
      xl: '1300px',
      '2xl': '1536px',
    }
})

export default theme