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
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.4rem;
  background-color: #242424;
  @media screen and (min-width: 768px) {
    
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1260px;
  margin: auto;
`

const Item = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-items: center;
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
          {/* <div ref={node}> */}
          <MenuBarDesktop>

            <Item to="/services">Services</Item>
            <Item to="/articles">Articles</Item>
            <Item to="/travel">Travel</Item>
            <Item to="/about">About</Item>
            {/* <Item to="/setup">Setup</Item> */}
          </MenuBarDesktop>

          <MenuBarMobile>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </MenuBarMobile>
          {/* </div> */}
        </Items>
      </Inner>

    </Container>
  )
}