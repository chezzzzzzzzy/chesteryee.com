import React from "react"
import { Link, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"


import Header from './Header'
import Footer from "./Footer"
import Theme from "./theme"

import Global from '../styles/global'


const Content = styled.div`
    @media screen and (min-width: 768px) {
       

    }

`

const Layout = ({ children }) => {
    return (
        <>
            <Global />


            <Header />

            <Content>
                {children}
            </Content>

            <Footer />
        </>

    )
}

export default Layout