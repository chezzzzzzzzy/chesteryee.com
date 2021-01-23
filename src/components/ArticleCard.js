import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Description,
  Title,
  FeatureDescription,
  Subtitle,
  Category,
  Date,
  Name,
  Header,
  Pointer,
  Dot,
  Portrait,
} from '../components/Collection'

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.focus ? 'column' : 'column'};
  justify-content: space-between;
  height: 100%;
  color: white;
  /* padding-bottom: 20px; */

  @media (min-width: 768px) {
    flex-direction: ${props => props.focus ? 'row' : 'column'};
  }


`

const Cover = styled.img`
  width: ${props => props.width ? `${props.width}` : '100%'};
  border-radius: 4px;
  height: ${props => props.height ? `${props.height}` : '160px'};
  object-fit: cover;

  @media (min-width: 768px) {
    /* display: none; */
  }
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.8rem 0;



`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 16px;

`

const Top = styled.div`


`

export class ArticleCard extends Component {
  render() {
    return (
      <Container focus={this.props.focus}>

        <Cover src={this.props.cover} height={this.props.height} width={this.props.width} />

        <Detail>
          <Top>
            <Category>{this.props.category}</Category>
            <Subtitle>{this.props.title}</Subtitle>
            <Description active>{this.props.description}</Description>
          </Top>

          <Profile>
            <Portrait src={this.props.portrait}></Portrait>
            <Name>{this.props.name}</Name>
            <Dot>•</Dot>
            <Date>{this.props.date}</Date>
          </Profile>
        </Detail>


      </Container>
    )
  }
}

export default ArticleCard
