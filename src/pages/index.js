import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
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

import icon_layers from '../assets/icon_layers.svg'
import icon_codeSlash2 from '../assets/icon_codeSlash2.svg'
import icon_rocket from '../assets/icon_rocket.svg'


import Banner from '../components/Banner'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import { Parallax } from 'react-parallax';

import {
  Mega,
  Title,
  Container,
  Pointer,
  Description,
  Description2,
  Cover,
  CoverBrands,
  Statistics,
  Date,
  ArticleTitle,
  IconLabel,
  Icon,
  Label,
  Section,
  Header,
  Wrapper,
  Button,
  Box,
  FeaturePointer,
  CenterWrapper,
  MovingIcon
} from '../components/Collection'
import icon_forward from '../assets/icon_forward.svg'


import { Helmet } from 'react-helmet'

import cover_jump from '../assets/cover_jump.png'

// assets
import icon_laptop from '../assets/laptop-outline.svg'
import icon_hammer from '../assets/hammer-outline.svg'
import icon_expand from '../assets/expand-outline.svg'
import icon_shapes from '../assets/shapes-outline.svg'
import ServiceCard from '../components/ServiceCard'
import { useSpring, animated } from 'react-spring'
import p2 from '../assets/profile2.png'
import profile from '../assets/linkedin profile.jpg'

import logo_reniu from '../assets/logo_reniu.png'
import logo_singtel from '../assets/singtel_logo_white.png'
import logo_citc from '../assets/logo_citc.png'
import logo_sk from '../assets/logo_sk.png'

import saly from '../assets/saly.png'
const Projects = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`


const HC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (${props => props.theme.mediaQueries.laptop}) {
    justify-content: space-between;
    flex-direction: row;


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

        grid-template-columns: 1fr 1fr 1fr;
    }


`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  background-color: #151515;
  padding: 0 20px;
`

const Content = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
`


const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 6rem;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 2fr 1fr
  }
  
`
const Companies = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 3rem;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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


const CTAButton = styled.a`
  border-radius: 100px;
  background-color: transparent;
  padding: 10px 28px;
  font-weight: 600;
  border: 1.4px solid #60a9ff;
  transition: background-color 0.2s ease-in-out;
  font-size: 14px;
  text-decoration: none;
  color: white;
  
  :hover {
    background-color: #60a9ff;

  }
`

const StatisticsBlock = styled.div`

`
const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  justify-content: space-between;
`

const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  margin: 2rem 0px;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr
  }

`

const Skill = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  background-color: #111111;
  position: relative;


  
`

const SkillTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Card = styled(motion.div)`
    display: flex;
    justify-items: space-between;
    flex-direction: column;
    padding: 1rem;
    background-color: #242424;
   
`



const Index = (props) => {


  return (
    <Layout>


      <MainSection>
        <Content>

          <Box margin='6px 0px'>
            <FeaturePointer>ASPIRING SOFTWARE ENGINEER</FeaturePointer>
          </Box>

          <Box margin='2px 0px'>
            <Mega>Hello, I'm Chester.</Mega>
          </Box>

          <Box margin='16px 0px'>
            <Description>
              Incoming Computer Science and Business undergraduate at
              Nanyang Technological University
              </Description>
          </Box>

          <Box margin='48px 0px'>
            <CTAButton>Resume</CTAButton>
          </Box>

        </Content>
      </MainSection>

      <Container style={{ padding: '0px 20px', maxWidth: '1500px', margin: '0px auto' }}>




        <Box margin='48px 0px'>
          <Box margin='0px 0px 32px'>
            <Title>Professional Experience</Title>
          </Box>


          <HC>
            <div>

              <Box margin='32px 0px'>
                <Description2>Co-Founder</Description2>
                <Pointer>RENIU</Pointer>

                <Box margin='16px 0px' width='70%'>
                  <Description>
                    Local startup that aims to produce sustainable and positively impactful fuel that is carbon neutral through the use of livestock and agricultural waste as the main medium in our product formulation.
                    Incubated at Singapore Polytechnic’s incubator office (SPinOFF) for close to 2 years.
                    Pitched to top VCs at several pitching events and exhibited at Ngee Ann Polytechnic, Echelon and Singapore Polytechnic.
                    Collaborated with partners to obtain resources and promote our product.
            </Description>
                </Box>
              </Box>

              <Box margin='32px 0px'>
                <Description2>Intern</Description2>
                <Pointer>Singtel</Pointer>

                <Box margin='16px 0px' width='70%'>
                  <Description>
                    Developed a Customer Relationship Management (CRM) platform for employees to request for resources in exchanges and datacenter facilities. Requests will then be fulfilled by the respective owner. Service Level Agreement (SLA) built in. Email notifications. Photo verification. Assisted with BAU work and operations. Attained basic Robotic Process Automation (RPA) skills using UIPath. Gained insights on networking concepts.
            </Description>
                </Box>
              </Box>

              <Box margin='32px 0px'>
                <Description2>Teaching Assistant / Instructor</Description2>
                <Pointer>Code in the Community</Pointer>

                <Box margin='16px 0px' width='70%'>
                  <Description>
                    Google-sponsored initiative to bring free coding classes to 3,000 young Singaporeans from less well-to-do backgrounds.
            </Description>
                </Box>
              </Box>

            </div>

            <Cover data={cover_jump} />

          </HC>


        </Box>






        <Box margin='48px 0px'>
          <Box margin='0px 0px 32px'>
            <Title>Skillsets</Title>
          </Box>

          <Cards
            initial="hidden"
            animate="visible"
            variants={list}
          >
            <Card variants={item}><ServiceCard featureIcon={icon_layers} featureTitle='Web Design' featureDescription='Designing pixel perfect websites and interfaces' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_codeSlash2} featureTitle='Web Development' featureDescription='Qality products that you would enjoy' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='Prototyping' featureDescription='High fidelity prototypes' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Animation' featureDescription='Animations that are smooth' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_rocket} featureTitle='Branding' featureDescription='Not your usual company' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Illustration' featureDescription='Illustrations that stands out' /></Card>
          </Cards>

        </Box>









        <Box margin='48px 0px'>
          <Box margin='0px 0px 32px'>
            <Title>Case Studies</Title>
          </Box>

          <Box margin='16px 0px'>

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

          </Box>
        </Box>








        <Box margin='48px 0px'>
          <Box margin='0px 0px 32px'>
            <Title>About Me</Title>
          </Box>
          <GridSection>
            <div>
              <Box width='80%'>

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

                <Box margin='50px 0px' style={{ width: '80%' }}>
                  <StatisticsContainer>
                    <StatisticsBlock>
                      <Statistics>4</Statistics>
                      <FeaturePointer>YEARS OF EXPERIENCE</FeaturePointer>
                    </StatisticsBlock>
                    <StatisticsBlock>
                      <Statistics>21</Statistics>
                      <FeaturePointer>YEARS OLD</FeaturePointer>
                    </StatisticsBlock>
                  </StatisticsContainer>
                </Box>

                <Box margin='30px 0px'>
                  <FeaturePointer>EDUCATION</FeaturePointer>
                </Box>


                <Box margin='16px 0px'>
                  <Description>
                    Computer Science
                </Description>
                  <Pointer>Nanyang Technological University</Pointer>
                </Box>

                <Box margin='16px 0px'>
                  <Description>
                    Business
                </Description>
                  <Pointer>Nanyang Technological University</Pointer>
                </Box>

                <Box margin='16px 0px'>
                  <Description>
                    Computer Engineering
                </Description>
                  <Pointer>Singapore Polytechnic</Pointer>
                </Box>



                <Box margin='30px 0px'>
                  <FeaturePointer>ACCOLADES</FeaturePointer>
                </Box>

                <Box margin='16px 0px'>
                  <Description>
                    Edge AI Scholarship
                </Description>
                  <Pointer>Intel</Pointer>
                </Box>

                <Box margin='16px 0px'>
                  <Description>
                    Engineering Scholarship
                </Description>
                  <Pointer>Singtel</Pointer>
                </Box>

                <Box margin='16px 0px'>
                  <Description>
                    Director's Honour Roll
                </Description>
                  <Pointer>Singapore Polytechnic</Pointer>
                </Box>

              </Box>


            </div>
            <div>
              <Box margin='50px 0px'>

                <Cover data={profile} />
              </Box>

            </div>
          </GridSection>
        </Box>







        <Box margin='48px 0px'>
          <Section center>
            <Companies>
              <CoverBrands data={logo_reniu} />
              <CoverBrands data={logo_singtel} />
              {/* <CoverBrands data={logo_citc} /> */}
              <CoverBrands data={logo_sk} />
            </Companies>

          </Section>
        </Box>




        {/* <Box margin='30px 0px'>
          <Section center>

            <Mega>Discover our services</Mega>

            <Box margin='50px 0px'>

              <Cards
                initial="hidden"
                animate="visible"
                variants={list}
              >
                <Card variants={item}><ServiceCard featureIcon={icon_layers} featureTitle='Web Design' featureDescription='Designing pixel perfect websites and interfaces' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_codeSlash2} featureTitle='Web Development' featureDescription='I build quality products that you would use.' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='Prototyping' featureDescription='Hgh fidelity prototypes' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Animation' featureDescription='Animations that are smooth' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_rocket} featureTitle='Branding' featureDescription='Not your usual company' /></Card>
                <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Illustration' featureDescription='Illustrations that stands out' /></Card>
              </Cards>
            </Box>

            <Button href='./articles'>
              <HC>
                <div style={{ marginRight: '4px' }}>Explore All</div>
                <MovingIcon size='16px' data={icon_forward}></MovingIcon>
              </HC>
            </Button>
          </Section>
        </Box>


        <Box margin='30px 0px'>
          <Section center>
            <Mega>Projects</Mega>


            <Box margin='50px 0px'>

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

            </Box>
          </Section>
        </Box> */}
      </Container>

      <Banner title="Let's work together" subtitle='DO YOU LIKE MY WORK?' />


    </Layout>
  )
}

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