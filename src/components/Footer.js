import React, { Component } from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import icon_github from '../assets/logo-github.svg'
import icon_instagram from '../assets/logo-instagram.svg'
import Face from '../assets/faceLogo.png'
import { FooterTitle, FooterDescription, FeatureDescription, FeaturePointer, HR } from './Collection'

const Socials = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

const Icon = styled.object`
  height: 16px;

`

const Footnote = styled.div`
  font-size: 0.6rem;
  color: #b9b9b9;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 1.4rem;
  background-color: #242424;
 
  @media screen and (min-width: 768px) {
    padding: 40px 0rem;

  }

`


const Foot = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  grid-gap: 24px;
  width: 100%;

`


const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1260px;
  margin: auto;
`


const Memoji = styled.img`
  height: 5%;
  width: 5%;
`

const LogoType = styled.div`
  font-size: 0.6rem;
  font-weight: bold;
  margin-left: 6px;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`

const Sitemap = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  font-size: 0.8rem;
  grid-gap: 20px;

   @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr ;
    justify-items: flex-end;
  }

`

const Final = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export class Footer extends Component {
  render() {
    return (
      <Container>
        <Inner>

          <Foot>

            <Sitemap>
              <div>
                <Logo>
                  <Memoji src={Face} />
                  <LogoType>Chester Yee</LogoType>
                </Logo>
                <FooterDescription>
                  Aspiring Software Engineer.
                </FooterDescription>
              </div>
              <div>
                <FooterTitle>Services</FooterTitle>
                <FooterDescription>Web Design (UI / UX)</FooterDescription>
                <FooterDescription>Web Development</FooterDescription>
                <FooterDescription>Prototyping</FooterDescription>
                <FooterDescription>Illustration</FooterDescription>
              </div>
              <div>
                <FooterTitle>Resources</FooterTitle>
                <FooterDescription>Design System</FooterDescription>
                <FooterDescription>Components</FooterDescription>
                <FooterDescription>Fonts</FooterDescription>
                <FooterDescription>Illustrations</FooterDescription>
              </div>
              <div>
                <FooterTitle>About</FooterTitle>
                <FooterDescription>Press Kit</FooterDescription>
              </div>


            </Sitemap>


            <HR></HR>
            <Final>

              <FooterDescription>
                © {new Date().getFullYear()} Chester Yee | Built in Singapore 🇸🇬
              </FooterDescription>

              <Socials>
                <Icon data={icon_github}><a href='github.com/chezzzzzzzzy'></a></Icon>
                <Icon data={icon_instagram}><a href='instagram.com/chezy'></a></Icon>
              </Socials>
            </Final>


          </Foot>
        </Inner>
      </Container>
    )
  }
}

export default Footer


