import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Description,
  Title,
  Category,
  Date,
  Name,
  Portrait,
} from '../components/Collection'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  color: white;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 3fr;
    grid-gap: 20px;
    padding: 30px 0px;
  }
`

const Cover = styled.img`
  width: 100%;
  border-radius: 4px;
  height: 160px;
  object-fit: cover;

  @media (min-width: 768px) {
    display: none;
  }
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 0;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`

export class ArticleCard extends Component {
  render() {
    return (
      <Container>
        <Profile>
          <Portrait hide src={this.props.portrait}></Portrait>
          <div>
            {/* <Category>{this.props.category}</Category> */}
            <Name>{this.props.name}</Name>
            <Date>{this.props.date}</Date>
          </div>
        </Profile>

        <div>
          <Category padding="10px 0px">{this.props.category}</Category>
          <Cover src={this.props.cover} />
          <Title padding="10px 0px">{this.props.title}</Title>
          <Description active>{this.props.description}</Description>
        </div>
      </Container>
    )
  }
}

export default ArticleCard
