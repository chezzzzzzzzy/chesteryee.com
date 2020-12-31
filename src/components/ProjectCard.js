import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex: 0 0 auto;
  /* box-shadow: 0px 20px 100px 10px black;   */
  background-color: #212121;

  @media screen and (max-width: 768px) {
  }
`

const Cover = styled.img`
  object-fit: cover;
  width: 100%;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 0.8rem;
  color: #b9b9b9;
  margin-top: 6px;
`

const Details = styled.div`
  padding: 20px;
`

export class ProjectCard extends Component {
  render() {
    return (
      <Container>
        <Cover src={this.props.skillCover} />
        <Details>
          <Title>{this.props.skillTitle}</Title>
          <Description>{this.props.skillDescription}</Description>
        </Details>
      </Container>
    )
  }
}

export default ProjectCard
