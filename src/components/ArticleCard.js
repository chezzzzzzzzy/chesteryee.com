import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: white;
    padding-bottom: 20px;

`

const Cover = styled.img`
    width: 100%;
    border-radius: 4px;
    height: 160px;
    object-fit: cover;
    
`

const Article = styled.div`

`

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    padding-top: 0.8rem;
    padding-bottom: 0.2rem;

`

const Subtitle = styled.div``

const Description = styled.div`
    font-size: 0.8rem;
    color: #B9B9B9;

`

const Portrait = styled.img`
    border-radius: 100px;
    background-color: pink;
    width: 10%;
    height: 10%;
    margin-right: 10px;
`

const Name = styled.div`
    font-size: 0.6rem;
    font-weight: bold;
    color: #B9B9B9;
`

const Date = styled.div`
    font-size: 0.4rem;
    color: #585858;
`

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.8rem 0;
`


export class ArticleCard extends Component {



    render() {
        return (
            <Container>
                <Cover src={this.props.cover} />
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
                <Profile>
                    <Portrait src={this.props.portrait}></Portrait>
                    <div>
                        <Name>{this.props.name}</Name>
                        <Date>{this.props.date}</Date>
                    </div>
                </Profile>
            </Container>
        )
    }
}

export default ArticleCard



