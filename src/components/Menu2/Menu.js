import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './MenuStyled'
import styled from 'styled-components'
import { useStaticQuery, Link, graphql } from 'gatsby'

const Item = styled(Link)`
  color: white;
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
      <Item to="/articles">Articles</Item>
      <Item to="/travel/">Travel</Item>
      <Item to="/about">About</Item>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
