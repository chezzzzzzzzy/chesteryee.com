import React, { useState, useRef } from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Face from '../assets/faceLogo.png'

import { Burger, Menu } from './'
import { useOnClickOutside } from './'

import {
  Subject

} from '../components/Collection'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f4f5f7;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.4rem;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    padding: 10px 100px;

  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: auto;
`

const Item = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 1000;


  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
`

const Items = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr ; */
  /* grid-gap: 20px; */
`

const Memoji = styled.img`
  width: 24px;
  margin-right: 10px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  
`

const MenuBarDesktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 16px;
    justify-items: flex-end;
  }
`

const MenuBarMobile = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default function Header() {
  const [open, setOpen] = useState(false)

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <Inner>

        <Item to="/">
          <Logo>
            <Memoji src={Face} />
            <div>{data.site.siteMetadata.title}</div>
          </Logo>
        </Item>

        <Items>
          <MenuBarDesktop>

            <Item to="/blog">Blog</Item>
            <Item to="/">Case Studies</Item>
            <Item to="/">About</Item>
          </MenuBarDesktop>

          <MenuBarMobile>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </MenuBarMobile>
        </Items>
      </Inner>

    </Container>
  )
}