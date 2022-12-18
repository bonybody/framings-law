export interface Fonts {
  fonts: {
    main: "'Yusei Magic', sans-serif"
    sub: "'Inter', sans-serif"
  }
  sizes: {
    xs: '0.875rem'
    sm: '1rem'
    body1: '1.25rem'
    body2: '1.5rem'
    md: '2rem'
    lg: '2.5rem'
    xl: '3rem'
  }
}

export interface Colors {
  primary: {
    main: '#FFAA2C'
    dark: '#FF8A00'
  }
  secondary: {
    main: '#33CE68'
    dark: '#0A8232'
  }
  background: {
    main: '#DF114F'
    right: '#D2104A'
  }
  border: {
    black: '#2B2B2B'
  }
  gray: '#D9D9D9'
  white: '#FFFFFF'
}

type CustomTheme = {
  fonts: Fonts
  colors: Colors
  shadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
  opacity: '0.5'
}

export const theme: CustomTheme = {
  fonts: {
    fonts: {
      main: "'Yusei Magic', sans-serif",
      sub: "'Inter', sans-serif"
    },
    sizes: {
      xs: '0.875rem',
      sm: '1rem',
      body1: '1.25rem',
      body2: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem'
    }
  },
  colors: {
    primary: {
      main: '#FFAA2C',
      dark: '#FF8A00'
    },
    secondary: {
      main: '#33CE68',
      dark: '#0A8232'
    },
    background: {
      main: '#DF114F',
      right: '#D2104A'
    },
    border: {
      black: '#2B2B2B'
    },
    gray: '#D9D9D9',
    white: '#FFFFFF'
  },
  shadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  opacity: '0.5'
}
