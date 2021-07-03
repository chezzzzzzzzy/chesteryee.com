import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    border-radius: 8px;

    @media screen and (min-width: 788px){
        width: 100%;
    }
`

const Cover = styled.img`
  border-radius: 8px;
    height: 550px;
    
    object-fit: cover;
    

`

const Content = styled.div`
    color: white;
    position: absolute;
    bottom: 32px;
    left: 32px;
`
const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;

    @media (min-width: 768px) {
        font-size: 2.2rem;
    }
`

const Date = styled.div`
    font-size: 0.6rem;
    font-weight: 400;
    margin-top: 0.4rem;
    @media (min-width: 768px) {
        font-size: 0.9rem;
    }
`

const StoriesCard = (props) => {
    return (
        <Container>
            <Cover src={props.cover} />
            <Content>
                <Title>{props.title}</Title>
                <Date>{props.date}</Date>
            </Content>
        </Container>
    )
}

export default StoriesCard
