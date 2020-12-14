import React from "react"
import Header from './Header'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Footer from "./Footer"
import Theme from "./theme"

const Wrapper = styled.div`
    color: white;
    margin: 0px auto;
    max-width: 650;
    /* padding: 0 1rem; */
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1D1D1D;        
`

const Global = createGlobalStyle`

body {
    margin: 0px;
    padding: 0;    
}

html {
    background: #1D1D1D;

}

h1, h2, h3, h4, h5, h6 {
  color: white;
}


pre {

    /* color: #707070; */
    background-color: #222222;
    border-radius: 6px;
    padding: 14px;
}

img {
    width: 100%;
}

p {
    font-size: 0.9rem;
}

`

const theme = {
    colors: {
        black: '#181818',
        graphite: '#616161',
        white: '#FFF',



        persianGreen: '#06B49A',
        lightBlue: '#AFDBD2',
        onyx: '#36313D'
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


        mobile_pointer: '0.67em'
    }
};

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Global />


            <Wrapper>

                <Header />

                {children}

                <Footer />
            </Wrapper>
        </ThemeProvider>

    )
}
