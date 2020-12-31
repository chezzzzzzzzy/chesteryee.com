import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    black: '#181818',
    graphite: '#616161',
    white: '#FFF',

    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },

  fontSizes: {
    h1: '6.10em',
    h2: '4.88em',
    h3: '3.91em',
    h4: '3.13em',
    h5: '2.50em',
    h6: '2.00em',

    mobile_title: '1.6em',
    mobile_subtitle: '1.1em',
    mobile_description: '0.9em',

    mobile_pointer: '0.67em',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
