import React from 'react'
import styled from 'styled-components'
import {
    Description,

} from '../components/Collection'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;


  @media (min-width: 768px) {
    flex-direction: ${props => props.latestArticle ? 'row' : 'column'};
    margin: 100px 0px;
  }



`



const Cover = styled.img`
  width: 100%;
  /* border-radius: 4px; */
  height: 240px;
  object-fit: cover;


  @media (min-width: 768px) {
    width: ${props => props.width ? `${props.width}` : '100%'};
    height: ${props => props.height ? `${props.height}` : '240px'};


  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;

  @media (min-width: 768px) {
    margin-left: ${props => props.lm ? '3rem' : null};
    margin-top: 32px;
  }
`




const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};
  font-weight: 300;
  margin: 12px 0px;


  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`



const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_title};
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`







const LatestArticleCard = (props) => {
    return (

        <Container latestArticle={props.latestArticle}>
            <Cover src={props.cover} height={props.height} width={props.width} />
            <Content lm={props.lm}>
                <Date>{props.date}</Date>
                <Title>{props.title}</Title>
                <Description active>{props.description}</Description>
            </Content>
        </Container>
    )
}


export default LatestArticleCard
