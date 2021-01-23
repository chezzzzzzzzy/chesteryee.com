import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Title,
  Subtitle,
  Header

} from '../components/Collection'


const Container = styled.div``


const Card = styled.div`
  margin: 4px 0px;
  text-align: center;
  padding: 1.2rem 4rem;
  background-color: #242424;

  @media (${props => props.theme.mediaQueries.laptop}) {
    padding: rem 4rem;

  }
`


const Timeframe = styled.div`
  font-size: 0.8rem;
  color: #585858;
  font-weight: 500;
`


export class ExperienceCard extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Header>{this.props.description}</Header>
          <Timeframe>{this.props.timeframe}</Timeframe>
        </Card>
      </Container>
    )
  }
}

export default ExperienceCard
