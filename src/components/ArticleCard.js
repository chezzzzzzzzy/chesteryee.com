import React, { Component } from 'react'
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
    
  }



`



const Cover = styled.img`
  width: 100%;
  /* border-radius: 4px; */
  height: 240px;
  object-fit: cover;
  margin-bottom: 12px;


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
    flex-direction: ${props => props.rev ? 'column' : 'column-reverse'};
  }
`




const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};
  font-weight: 300;
  margin: 4px 0px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`



const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_subtitle};
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};
  font-weight: 500;
  margin: 4px 0px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_header};
  }
`







export class ArticleCard extends Component {


  render() {

    return (


      <Container latestArticle={this.props.latestArticle}>
        <Cover src={this.props.cover} height={this.props.height} width={this.props.width} />
        <Content lm={this.props.lm} rev={this.props.rev}>
          <Date>{this.props.date}</Date>
          <Title>{this.props.title}</Title>
          <Description active>{this.props.description}</Description>
        </Content>
      </Container>
    )
  }
}

export default ArticleCard





