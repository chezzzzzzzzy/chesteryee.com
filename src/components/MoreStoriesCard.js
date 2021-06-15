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
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 6px;
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1.4rem;
`

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
`

const Date = styled.div`
    font-size: 0.9rem;
    color: gray;
    margin-top: .2rem;
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
                    <Title>{props.title}</Title>
                    <Date>{props.date}</Date>
                </Content>
            </Card>
            <HR />
        </Container>
    )
}

export default MoreStoriesCard
