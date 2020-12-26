import React, {useState, useRef} from "react";
import {useStaticQuery, Link, graphql} from "gatsby";
import styled from "styled-components";
import Face from "../assets/faceLogo.png";


import {Burger, Menu} from "./";
import {useOnClickOutside} from "./";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.4rem;
  background-color: #242424;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 10px 14%;
  }
`;


const Item = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1000;

  @media screen and (min-width: 768px) {
      font-size: 0.9rem;
    }
`;

const Items = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr ; */
  /* grid-gap: 20px; */

`;

const Memoji = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

`;

const MenuBarDesktop = styled.div`
  
  display: none;

  @media screen and (min-width: 768px) {
      display: grid; 
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
  }
`;

const MenuBarMobile = styled.div`
  
  display: block;

  @media screen and (min-width: 768px) {
    display: none;

  }
`;


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
        `,
  );

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
        <MenuBarDesktop>
          <Item to='/articles'>Articles</Item>
          <Item to='/travel/'>Travel</Item>
          <Item to='/about'>About</Item>
        </MenuBarDesktop>

        <MenuBarMobile>

          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </MenuBarMobile>
        {/* </div> */}

      </Items>
    </Container>
  );
}
