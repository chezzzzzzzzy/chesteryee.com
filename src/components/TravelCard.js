import React, { Component } from 'react'
import styled from 'styled-components'

import { Date, Title, Subtitle, Description } from '../components/Collection'

const ArticleDate = styled(Date)`
  color: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  color: white;
  position: relative;
  width: 100%;
  border-radius: 4px;


  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const Cover = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 4px;

`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const Location = styled.div`
  z-index: 100;
`

const Details = styled.div`
  position: absolute;
  top: 4%;
  left: 6%;
  right: 6%;
`

export class TravelCard extends Component {
  render() {
    return (
      <Container>
        <Cover src={this.props.cover} />
        <Details>
          <Info>
            <Location>
              <Title>{this.props.city}</Title>
              <Description>{this.props.country}</Description>
            </Location>

            <ArticleDate>{this.props.date}</ArticleDate>
          </Info>
        </Details>
      </Container>
    )
  }
}

export default TravelCard
