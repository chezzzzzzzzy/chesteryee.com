import React, { useState, useRef } from 'react';
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import Face from '../assets/faceLogo.png'


import { Burger, Menu } from './';
import { useOnClickOutside } from './';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.4rem;
  background-color: #242424;
  max-width: 100%;
`


const Item = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
`

const Items = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr;
  grid-gap: 20px;
`

const Memoji = styled.img`
  width: 9%;
  margin-right: 10px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;

`


export default function Header() {

  const [open, setOpen] = useState(false);

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


      <Item to='/'>
        <Logo>
          <Memoji src={Face} />
          <div>
            {data.site.siteMetadata.title}
          </div>
        </Logo>
      </Item>


      <Items>
        {/* <div ref={node}> */}
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        {/* </div> */}

      </Items>
    </Container>
  )
}
