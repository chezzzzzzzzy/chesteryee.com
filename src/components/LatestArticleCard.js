import React from 'react'
import styled from 'styled-components'
import {
  Description,

} from '../components/Collection'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 1500px;
  background-color: #f7f7f7;
  border-radius: 6px;

  @media (min-width: 768px) {
    flex-direction: ${props => props.latestArticle ? 'row' : 'column'};
    margin: 80px auto;
    border-radius: 6px;


  }



`



const Cover = styled.img`
  width: 100%;
  height: 260px;
  /* border-radius: 4px; */
  object-fit: cover;
  border-radius: 0px;


  @media (min-width: 768px) {
    width: ${props => props.width ? `${props.width}` : '100%'};
    height: ${props => props.height ? `${props.height}` : '240px'};
    border-radius: 6px 0px 0px 6px;


  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin: 2rem;
  }
`




const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};
  font-weight: 500;
  margin: 12px 0px;
  color: black;


  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`



const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_title};
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};
  font-weight: 600;
  margin-bottom: 8px;
  color: black;

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
