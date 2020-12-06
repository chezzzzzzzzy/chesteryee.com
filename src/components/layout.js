import React from "react"
import Header from './Header'
import styled, { createGlobalStyle } from 'styled-components'
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

export default function Layout({ children }) {
    return (
        <div>
            <Global />
            <Theme>


                <Wrapper>

                    <Header />

                    <div>
                        {children}
                    </div>

                    <Footer />
                </Wrapper>
            </Theme>
        </div>

    )
}
