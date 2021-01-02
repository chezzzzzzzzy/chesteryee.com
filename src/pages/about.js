import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import ExperienceCard from '../components/ExperienceCard'
import experience from '../assets/experience.json'
import education from '../assets/education.json'
import accolades from '../assets/accolades.json'
import icon_document from '../assets/docRightISO.svg'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import {
  Container,
  Section,
  Subject,
  Title,
  Description,
  Wrapper,
} from '../components/Collection'

const Icon = styled.object`
  width: 20%;
`

const About = ({ data }) => (
  <Layout>
    <Subject>About</Subject>
    <Container>
      {/* <Icon data={icon_document} /> */}
      <Wrapper>
        <Description>
          Technology has always been an interest of mine ever since I was
          young. Apart from coding, there are many other things which I enjoy
          doing as well. I enjoy travelling to different places around the
          world to discover and seek new experience. I mainly focus in web and
          mobile applications development. More recently, I also had the
          chance to pick up the basics of Machine Learning and Deep Learning.
          With the adoption of Artifiical Intelligence increasing steadily, I
          would like to bring the 2 domains closer together by integrating
          Artifical Intelligence in the projects I am doing.
          </Description>
      </Wrapper>


      <Section>
        <Title>Experience</Title>
        {experience.map(e => {
          return (
            <ExperienceCard
              entity={e.entity}
              description={e.position}
              timeframe={e.timeframe}
            />
          )
        })}
      </Section>


      <Section>
        <Title>Education</Title>
        {education.map(e => {
          return (
            <ExperienceCard
              entity={e.entity}
              description={e.degree}
              timeframe={e.timeframe}
            />
          )
        })}
      </Section>
      <Section>
        <Title>Accolades</Title>
        {accolades.map(e => {
          return (
            <ExperienceCard
              entity={e.provider}
              description={e.name}
              timeframe={e.year}
              award={e.award}
            />
          )
        })}
      </Section>

    </Container>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
