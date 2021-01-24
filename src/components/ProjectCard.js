import React, { Component } from 'react'
import styled from 'styled-components'
import { FeatureSubtitle, FeatureControl, FeatureDescription, FeaturePointer } from './Collection'

import icon_arrowForward from '../assets/arrow-forward-outline.svg'

const Container = styled.div`
 
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #242424;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
  }
`

const Cover = styled.img`

  margin: 40px auto;
  @media (min-width: 768px) {

  }
`




const Company = styled.div`
   font-size: ${props => props.theme.fontSizes.mobile_pointer};
    font-weight: 500;
    padding: 10px 0px;
    letter-spacing: 1px;
    color: #585858;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.desktop_pointer};
    }

`
const Split = styled.div`
  display: flex;
  padding: 1rem 0px;
  align-items: center;
`
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export class ProjectCard extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Company>{this.props.skillDescription}</Company>
          <FeatureSubtitle>{this.props.skillTitle}</FeatureSubtitle>
          <div>

            <Cover src={this.props.skillCover} />
          </div>
          <Controls>
            <FeatureControl data={icon_arrowForward}></FeatureControl>
            <FeaturePointer>View Work</FeaturePointer>
          </Controls>
        </Card>
      </Container>
    )
  }
}

export default ProjectCard
