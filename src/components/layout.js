import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Theme from './theme'

import Global from '../styles/global'
import theme from '../styles/theme'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  min-height: 100vh;
  /* padding: 0px 20px; */
  margin-right: auto;
  margin-left: auto;
  width: 100%;



  @media screen and (min-width: 768px) {
   
    
  }
`



const Container = styled.div`
  min-height: 100vh;

`

const Layout = ({ children }) => {
  return (
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
      <Wrapper>
        <Global />
        <Helmet>
          <title>Chester Yee</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <Container>

            {/* reusable title, subtitle, etc */}
            <Header />

            <Content>{children}</Content>

            <Footer />
          </Container>
        </ThemeProvider>
      </Wrapper>
    </motion.div>

  )
}

export default Layout
