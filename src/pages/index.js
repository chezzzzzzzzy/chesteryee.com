import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/layout'
import GeneralCard from '../components/GeneralCard'
import ProjectCard from '../components/ProjectCard'

import cover_intro from '../assets/behind mbp3.png'
import icon_mail from '../assets/mail-outline.svg'
import icon_phone from '../assets/phone-portrait-outline.svg'
import cover_mpp3 from '../assets/cover_mpp3.png'
import cover_translation from '../assets/cover_translation.png'

import icon_speaker from '../assets/interface.png'
import icon_mockup from '../assets/project.png'
import icon_toggle from '../assets/toggle.png'
import icon_message from '../assets/message.png'
import icon_flower from '../assets/flower.png'
import icon_desktop from '../assets/desktop.png'

import Banner from '../components/Banner'

import theme from '../styles/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import {
  Mega,
  Title,
  Container,
  Pointer,
  Description,
  Cover,
  Date,
  ArticleTitle,
  IconLabel,
  Icon,
  Label,
  Section,
  Header,
  Wrapper,
  Button,
  MarginWrapper,
  FeaturePointer,
  CenterWrapper
} from '../components/Collection'

import { Helmet } from 'react-helmet'


// assets
import icon_laptop from '../assets/laptop-outline.svg'
import icon_hammer from '../assets/hammer-outline.svg'
import icon_expand from '../assets/expand-outline.svg'
import icon_shapes from '../assets/shapes-outline.svg'
import ServiceCard from '../components/ServiceCard'


const Projects = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 1260px;
    grid-template-columns: 1fr 1fr;
  }
`

const Project = styled(Link)`
  text-decoration: none;
`

const Cards = styled(motion.div)`
    display: grid;
    grid-gap: 1rem;
    width: 100%;

    @media (${props => props.theme.mediaQueries.laptop}) {
      min-width: 1260px;

        grid-template-columns: 1fr 1fr;
    }


`

const Card = styled(motion.div)`
`



const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -10 },
}

const Index = (props) => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Container>



        <MarginWrapper>
          <Section center height>
            <motion.div animate={{ scale: [0.9, 1, 0.9] }} transition={{ duration: 1 }}>
              <Cover data={cover_intro} />
            </motion.div>

            <MarginWrapper margin='6px 0px'>
              <FeaturePointer>ASPIRING SOFTWARE ENGINEER</FeaturePointer>
            </MarginWrapper>

            <MarginWrapper margin='2px 0px'>
              <Mega>Hello, I'm Chester.</Mega>
            </MarginWrapper>

            <MarginWrapper margin='16px 0px'>
              <Description>
                <CenterWrapper>
                  Incoming Computer Science and Business undergraduate at
                  Nanyang Technological University.
                </CenterWrapper>
              </Description>
            </MarginWrapper>

            {/* <Button>Resume</Button> */}


          </Section>
        </MarginWrapper>







        <MarginWrapper margin='30px 0px'>
          <Section center>
            <FeaturePointer>WHAT I DO</FeaturePointer>
            <Title>Services</Title>
            <MarginWrapper margin='50px 0px'>

              <Cards
                initial="hidden"
                animate="visible"
                variants={list}
              >
                <Card variants={item}><ServiceCard featureIcon={icon_laptop} featureTitle='WEB DESIGN ( UI / UX )' featureDescription='My core business is designing pixel perfect websites and interfaces.' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_hammer} featureTitle='WEB DEVELOPMENT' featureDescription='I build quality products that you would use.' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='PROTOTYPING' featureDescription='I use high fidelity prototypes to learn how your website interacts.' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='ILLUSTRATION' featureDescription='In addition to UI/UX, I also make illustrations and animations.' /></Card>
              </Cards>
            </MarginWrapper>
          </Section>
        </MarginWrapper>


        <MarginWrapper margin='30px 0px'>
          <Section center>
            <FeaturePointer>PROJECTS</FeaturePointer>
            <Title>Recent Work</Title>

            <MarginWrapper margin='50px 0px'>

              <Projects>
                {props.data.allPrismicProject.edges.map(({ node }) => (
                  <Project to={node.uid}>

                    <ProjectCard
                      skillCover={cover_mpp3}
                      skillTitle={node.data.title.text}
                      skillDescription={node.data.company.text}
                    />


                  </Project>
                ))}
              </Projects>

            </MarginWrapper>
          </Section>
        </MarginWrapper>
      </Container>

      <Banner title="Let's Work Together" subtitle='DO YOU LIKE MY WORK?' />


    </ThemeProvider>
  </Layout>
)

export default Index



export const query = graphql`
  query {

    allPrismicProject {
      edges {
        node {
          id
          uid
          url

          first_publication_date
          last_publication_date
          data {
           
            date(formatString: "Do MMMM YYYY")
            title {
              text
            }
            company {
              text
            }
          }
        }
      }
    }





  }
`