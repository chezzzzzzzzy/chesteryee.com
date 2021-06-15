import React, { Component } from 'react'
import styled from 'styled-components'
import { FeatureSubtitle, FeatureControl, FeatureDescription, FeaturePointer, Description } from './Collection'


import cover_formTemplate from '../assets/cover_formTemplate.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;


  @media screen and (min-width: 768px) {
    flex-direction: column;
    }
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

  position: relative;

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

const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 24px 20px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      margin: 24px 0px;

    }

`

const CoverContainer = styled.div`
  background-color: #f9f9f9;
  width:100%;

  @media screen and (min-width: 768px) {
      width: 100%;
    }
 
`



export class ProjectCard extends Component {
  render() {
    return (
      <Container>

        <CoverContainer>
          <Cover src={cover_formTemplate} />
        </CoverContainer>
        <Info>
          <div>
            <FeatureSubtitle>{this.props.skillTitle}</FeatureSubtitle>
            <Company>{this.props.skillDescription}</Company>
          </div>

          {/* <Description>
            This objective of this project was to solve the constant stream of emails that were received to request for the installation of fixtures and equipments in Singtel Exchanges and Datacenters.
          </Description> */}
        </Info>

      </Container>
    )
  }
}

export default ProjectCard

