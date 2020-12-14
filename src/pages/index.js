import React, { Component } from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import GeneralCard from '../components/GeneralCard'
import styled from 'styled-components'
import cover_userInterface from '../assets/cursor.png'
import cover_userDesign from '../assets/color-picker.png'
import ProjectCard from "../components/ProjectCard"

import cover_intro from '../assets/intro.png'
import icon_mail from '../assets/mail-outline.svg'
import icon_phone from '../assets/phone-portrait-outline.svg'
import cover_mpp from '../assets/cover_mpp.png'
import cover_nlp from '../assets/cover_nlp.png'

import icon_mobile from '../assets/mobileLeft.svg'
import icon_pencil from '../assets/pencilRight.svg'
import icon_speaker from '../assets/speakerRight.svg'


const Title = styled.div`
  font-size: 1.6em;
  /* font-size: ${props => props.theme.fontSizes.mobile_title}; */
  font-weight: bold;

`

const Subtitle = styled.div`
  font-size: 1.1em;
  padding: 0.6rem 0;
  color: ${props => props.active ? 'white' : '#585858'};
  font-weight: 600;

`

const Pointer = styled.div`
  font-size: 0.67em;
  font-weight: bold;
  color: #585858;

`

const Description = styled.div`
  font-size: 0.9em;
  padding: 1rem 0;
  
`

const Container = styled.div`
  display: flex;
  padding: 0 1.4rem;
  height: 100%;
  flex-direction: column;

`

const Section = styled.div`
  margin: 50px 0px;
`

const SkillCards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

`

const Cover = styled.object`
  width: 100%;
`


const Details = styled.div`
    padding: 0 1.4rem;

`

const Icon = styled.object`
  color: white;
  filter: invert(100%);
  width: 20px;
`

const InfoRow = styled.div`
  /* display: flex;
  flex-direction: row;
  align-self: center; */
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  margin: 8px 0px;
  
`
const Info = styled.div`
  color: #B9B9B9;
  font-size: 0.8rem;
`


const Index = () => (

  <Layout>
    <Container>


      <Section>
        <Title>Hello,</Title>
        <Title>I'm Chester</Title>

        <Subtitle>Aspiring Software Engineer</Subtitle>

        <Description>
          Incoming Computer Science and Business undergraduate
          student at Nanyang Technological University based in
          Singapore.
          </Description>

        <Cover data={cover_intro} />
      </Section>

      <Section>
        <Pointer>What I Do</Pointer>
        <Subtitle active >I enjoy creating delightful, human-centered digital experiences.</Subtitle>
        <SkillCards>
          <GeneralCard color='#0263FF' skillCover={icon_mobile} skillTitle='User Interface' skillDescription='Building a harmony between users and UI' />
          <GeneralCard color='#FFCBF3' skillCover={icon_pencil} skillTitle='User Experience' skillDescription='User experience is the singular and accumulated experiences that occur for users as a consequence of them interacting with an object in a given context' />
          <GeneralCard color='#F17A8F' skillCover={icon_speaker} skillTitle='User Interface' skillDescription='We have got quite a few already made templates for better project management that you can use now.' />
        </SkillCards>
      </Section>

    </Container>





    <Section>
      <Details>
        <Pointer>Projects</Pointer>
        <Subtitle active>Apps which I have built</Subtitle>
      </Details>
      <ProjectCards>
        <ProjectCard skillCover={cover_mpp} skillTitle='Master Planner Portal' skillDescription='Singtel' />
        <ProjectCard skillCover={cover_nlp} skillTitle='Language Translation' skillDescription='ET0732 — Machine Learning & Artificial Intelligence' />

      </ProjectCards>
    </Section>

    <Section>
      <Details>
        <Pointer>Articles</Pointer>
        <Subtitle active>Latest reads</Subtitle>
      </Details>

    </Section>



    <Section>
      <Details>
        <Pointer>Say hello 👋🏻</Pointer>
        <Subtitle active>Let's collaborate!</Subtitle>


        <InfoRow>
          <Icon data={icon_mail} />
          <Info>hello@chesteryee.com</Info>
        </InfoRow>
        <InfoRow>
          <Icon data={icon_phone} />
          <Info>+65 9318 1831</Info>
        </InfoRow>

      </Details>

    </Section>

  </Layout>

)



export default Index

