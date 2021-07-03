import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.end ? 'flex-end' : 'flex-start'};

    padding: 16px;
    background-color: #242424;
    text-decoration: none;
    color: gray;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: border 0.2s ease-in-out;
    :hover {
        border: 1px solid ${props => props.theme.colors.accent};
    }

    @media screen and (min-width: 768px) {
        padding: 24px;

    }
`

const Direction = styled.div`
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
`
const Title = styled.div`
    margin: 4px 0px 0px;
`


const NavCard = (props) => {
    return (
        <Container to={props.to} end={props.end}>
            <Direction>{props.direction}</Direction>
            <Title>{props.title}</Title>
        </Container>
    )
}

export default NavCard
