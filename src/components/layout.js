import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Theme from './theme';

import Global from '../styles/global';
import theme from '../styles/theme';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global />
      <ThemeProvider theme={theme}>
        {/* reusable title, subtitle, etc */}
        <Header />

        <Content>{children}</Content>

        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;
