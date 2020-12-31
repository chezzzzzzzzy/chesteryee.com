import React, { Component } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';
import icon_github from '../assets/logo-github.svg';
import icon_instagram from '../assets/logo-instagram.svg';
import Face from '../assets/faceLogo.png';

const Socials = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4px;
`;

const Icon = styled.object`
  height: 16px;
`;

const Footnote = styled.div`
  font-size: 0.6rem;
  color: #b9b9b9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.4rem;
  background-color: #242424;

  @media screen and (min-width: 768px) {
    padding: 10px 14%;
  }
`;

const Memoji = styled.img`
  height: 5%;
  width: 5%;
`;

const LogoType = styled.div`
  font-size: 0.6rem;
  font-weight: bold;
  margin-left: 6px;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Footnote>
          <Logo>
            <Memoji src={Face} />
            <LogoType>Chester Yee</LogoType>
          </Logo>
          Copyright © 2020 Chester Yee. All rights reserved.
        </Footnote>

        <Socials>
          <Icon data={icon_github} />
        </Socials>
      </Container>
    );
  }
}

export default Footer;
