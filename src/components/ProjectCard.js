import React, { Component } from 'react'
import styled from 'styled-components'
import { FeatureSubtitle, FeatureControl, FeatureDescription, FeaturePointer, Description } from './Collection'

import icon_arrowForward from '../assets/arrow-forward-outline.svg'
import cs2 from '../assets/cs2.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
    font-weight: 400;
    margin: 8px 0px;
    color: #585858;

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


const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 24px 0px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

`

const CoverContainer = styled.div`
  /* background-color: #111; */
  height: 100%;

  @media screen and (min-width: 768px) {
    height: 500px;
    }
`



export class ProjectCard extends Component {
  render() {
    return (
      <Container>
        {/* <Card>
          <Company>{this.props.skillDescription}</Company>
          <FeatureSubtitle>{this.props.skillTitle}</FeatureSubtitle>
          <div>

            <Cover src={this.props.skillCover} />
          </div>
          <Controls>
            <FeatureControl data={icon_arrowForward}></FeatureControl>
            <FeaturePointer>View Work</FeaturePointer>
          </Controls>
        </Card> */}
        <CoverContainer>
          <img src={cs2} />
        </CoverContainer>
        <Info>
          <div>
            <FeatureSubtitle>{this.props.skillTitle}</FeatureSubtitle>
            <Company>{this.props.skillDescription}</Company>
          </div>

          <Description>
            This objective of this project was to solve the constant stream of emails that were received to request for the installation of fixtures and equipments in Singtel Exchanges and Datacenters.
          </Description>
        </Info>

      </Container>
    )
  }
}

export default ProjectCard
