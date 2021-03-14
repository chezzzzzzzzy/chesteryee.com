import React, { Component } from 'react'
import styled from 'styled-components'

import { Date, Title, Subtitle, Description, Name, Header } from '../components/Collection'

const ArticleDate = styled(Date)`
  color: white;
`

const Container = styled.div`
  /* height: 500px; */
  position: relative;

  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const Cover = styled.img`
  object-fit: cover;
  height: 500px;
  border-radius: 6px;

`

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

`

const Location = styled.div`
  z-index: 100;
`




export class TravelCard extends Component {
  render() {
    return (
      <Container>
        <Cover src={this.props.cover} />

        <Info>
          <Location>
            {/* <Header>{this.props.country}</Header> */}
            <Title>{this.props.city}</Title>
          </Location>
          {/* <Date>{this.props.date}</Date> */}
        </Info>


      </Container>
    )
  }
}

export default TravelCard
