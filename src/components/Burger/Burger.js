import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'
import { StyledBurger } from './BurgerStyled'

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
