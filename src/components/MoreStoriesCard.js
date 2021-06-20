import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Card = styled.div`
    display: flex;
    
`

const Cover = styled.img`
    width: 140px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;

    @media (min-width: 768px) {
        width: 200px;
        height: 140px;
    }
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1.4rem;
`

const Title = styled.div`
    font-size: 1.1rem;
    font-weight: 500;

    @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const Date = styled.div`

    font-size: ${props => props.theme.fontSizes.mobile_pointer};
    color: gray;
    font-weight: 400;
    margin: 8px 0px;

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.desktop_pointer};
    }
`

const Tag = styled.div`
    font-size: ${props => props.theme.fontSizes.mobile_pointer};
    color: gray;
    font-weight: 600;
    letter-spacing: 0.4px;
    margin: 4px 0px;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 0.7rem;
    }
`

const HR = styled.hr`
    border: 0.5px solid #dedede;
    margin-top: 2rem;
    width: 100%;

`

const MoreStoriesCard = (props) => {

    return (
        <Container>
            <Card>
                <Cover src={props.cover} />
                <Content>
                    <Tag>{props.tags}</Tag>
                    <Title>{props.title}</Title>
                    <Date>{props.date}</Date>
                </Content>
            </Card>
            <HR />
        </Container>
    )
}

export default MoreStoriesCard
