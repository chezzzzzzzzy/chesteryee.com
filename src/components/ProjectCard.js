import React, { Component } from 'react'
import styled from 'styled-components'
import { Subtitle, FeatureControl, FeatureDescription, Title, FeaturePointer } from './Collection'

import icon_arrowForward from '../assets/arrow-forward-outline.svg'

const Container = styled.div`
 
`

const Card = styled.div`
  display: grid;
  background-color: #242424;
  overflow: hidden;
  padding: 2rem;
  border-radius: 6px;


  @media screen and (max-width: 768px) {
  }
`

const Cover = styled.img`
  object-fit: cover;
  width: 100%;
  position: relative;
  right: -60px;
  height: 160px;
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
  display: grid;
  grid-template-columns: 2fr 1.6fr;
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
          <Split>
            <div>
              <Title>{this.props.skillTitle}</Title>
              {/* <FeatureDescription>Website</FeatureDescription> */}
            </div>
            {/* <Cover src={this.props.skillCover} /> */}
          </Split>
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
