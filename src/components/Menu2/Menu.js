import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './MenuStyled'
import styled from 'styled-components'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { motion } from "framer-motion";


const Items = styled(motion.ul)`
    display: grid;
    grid-gap: 1rem;


`

const ItemsFM = styled(motion.li)`
`

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -10 },
}



const Item = styled(Link)`
  color: black;
  text-decoration: none;
  /* font-size: 0.8rem; */
  font-size: 1.6rem;
  padding: 0.6rem 1.6rem;
  font-weight: bold;
`

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} {...props}>


      <Items
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <ItemsFM variants={item}><Item to="/blog">Blog</Item></ItemsFM>
        {/* <ItemsFM variants={item}><Item to="/travel">Travel</Item></ItemsFM> */}
        {/* <ItemsFM variants={item}><Item to="/about">About</Item></ItemsFM> */}
      </Items>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
