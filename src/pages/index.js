import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

import Layout from '../components/layout'
import GeneralCard from '../components/GeneralCard'
import ProjectCard from '../components/ProjectCard'

import cover_intro from '../assets/behind mbp3.png'
import icon_mail from '../assets/mail-outline.svg'
import icon_phone from '../assets/icon_phone.svg'
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
import icon_pwa from '../assets/icon_pwa.svg'
import icon_flask from '../assets/icon_flask.svg'


import Banner from '../components/Banner'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import { Parallax } from 'react-parallax';
import { color, fontSize } from 'styled-system'

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
  BoxNew,

  FeaturePointer,
  CenterWrapper,
  MovingIcon,
  H5
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

import logo_reniu from '../assets/logo_reniu_black.png'
import logo_singtel from '../assets/logo_singtel_black.png'
import logo_citc from '../assets/logo_citc.png'
import logo_sk from '../assets/logo_sk_black.png'

import saly from '../assets/saly.png'
const Projects = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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
    grid-gap: 2rem;
    width: 100%;

    @media (${props => props.theme.mediaQueries.laptop}) {

        grid-template-columns: 1fr 1fr;
    }


`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  justify-content: center;
  background-color: #fff;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
      padding: 0 100px;

  }


`

const Content = styled.div`
  max-width: 1200px;
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




const StatisticsBlock = styled.div`

`
const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  justify-content: space-between;
`




const Card = styled(motion.div)`
    display: flex;
    justify-items: space-between;
    flex-direction: column;
   
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const SkillCategory = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const SkillSub = styled.div`

`


const Description3 = styled.div`
  font-weight: 450;
  margin: 1rem 0px;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    margin: 0rem 0px;
    font-size: 1.4rem;

  }
`





const Index = (props) => {

  const { ref, inView } = useInView()
  const animation = useAnimation()
  useEffect(() => {

    console.log(inView)
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5
        }
      })



    }

    if (!inView) {
      animation.start({
        x: '-100vw', transition: {
          type: 'spring',
          duration: 1.5
        }
      })
    }
  })



  return (
    <Layout>


      <MainSection>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
        >
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

          </Content>
        </motion.div>
      </MainSection>

      <Container style={{ margin: '0px auto', backgroundColor: '#f9f9f9' }}>


        <div style={{ maxWidth: '1200px', margin: '0px auto' }}>


          <Box margin='48px 0px'>
            <Box margin='0px 0px 32px'>
              <Title>Professional Experience</Title>
            </Box>


            <HC ref={ref} >
              <motion.div animate={animation}>

                <Box margin='32px 0px'>
                  <Description2>Co-Founder</Description2>
                  <Pointer>RENIU</Pointer>

                  <Box margin='16px 0px' width='70%'>
                    <Description>
                      Local startup that aims to produce sustainable and positively impactful fuel that is carbon neutral through the use of livestock and agricultural waste as the main medium in our product formulation. Idea founded in Yogyakarta during an Overseas Social Innovation Programme while solving issues for the villagers of Kali Tengah Lor at the foothill of Mount Merapi.
                      Incubated at Singapore Polytechnic’s incubator office (SPinOFF) for close to 2 years.
                      Pitched to top VCs at several hackathons and exhibited at Ngee Ann Polytechnic, Echelon and Singapore Polytechnic.
                      Collaborated with key stakeholders (Singapore Polo Club, DairyFolks, SP InnoVillage) to obtain resources and promote our product.
            </Description>
                  </Box>
                </Box>

                <Box margin='32px 0px'>
                  <Description2>Intern</Description2>
                  <Pointer>Singtel</Pointer>

                  <Box margin='16px 0px' width='70%'>
                    <Description>
                      Developed a Customer Relationship Management (CRM) platform for employees to request for resources in exchanges and datacenter facilities. Requests will then be fulfilled by the respective owner. Service Level Agreement (SLA) built in. Email notifications. Photo verification. Assisted with BAU work and operations. Attained basic Robotic Process Automation (RPA) skills using UIPath. Gained insights on OSI model and networking concepts.
            </Description>
                  </Box>
                </Box>

                <Box margin='32px 0px'>
                  <Description2>Teaching Assistant / Instructor</Description2>
                  <Pointer>Code in the Community</Pointer>

                  <Box margin='16px 0px' width='70%'>
                    <Description>
                      Volunteered at Leng Kee Community Club for the Google-sponsored initiative to bring free coding classes to 3,000 young Singaporeans from less well-to-do backgrounds.
            </Description>
                  </Box>
                </Box>

              </motion.div>

              <Cover data={cover_jump} />

            </HC>


          </Box>
        </div>
      </Container>





      <Container style={{ maxWidth: '1200px', margin: '0px auto' }}>



        <Box margin='48px 0px'>


          <Box margin='128px 0px'>

            <SkillCategory>
              <Title>
                Design
            </Title>
              <SkillSub>
                <Box margin='0px 0px 80px'>
                  <Description3>
                    Establishing the right visual connection with your customers and users by creating eye-catching and memorable designs as well as meaningful user experience.
                </Description3>
                </Box>

                <Cards
                  initial="hidden"
                  animate="visible"
                  variants={list}
                >
                  <Card variants={item}><ServiceCard featureIcon={icon_layers} featureTitle='Websites and Platforms' featureDescription='Designing pixel perfect websites and interfaces' /></Card>
                  <Card variants={item}><ServiceCard featureIcon={icon_codeSlash2} featureTitle='Mobile Applications' featureDescription='Native experience for applications that run on different platforms' /></Card>
                  <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='Branding' featureDescription='Personal branding that allows your product to stand out' /></Card>
                  <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Prototyping' featureDescription='Design concepts to better visualise the creative direction of the product' /></Card>
                </Cards>
              </SkillSub>
            </SkillCategory>
          </Box>

          <Box margin='128px 0px'>


            <SkillCategory>
              <Title>
                Development
            </Title>
              <SkillSub>
                <Box margin='0px 0px 80px'>
                  <Description3>
                    Implementing your project with scalable architecture design, modern technology, and an excellent level of data security.
                  </Description3>
                </Box>

                <Cards
                  initial="hidden"
                  animate="visible"
                  variants={list}
                >
                  <Card variants={item}><ServiceCard featureIcon={icon_rocket} featureTitle='Web services' featureDescription='Web services which are customized to your needs and goals' /></Card>
                  <Card variants={item}><ServiceCard featureIcon={icon_phone} featureTitle='Native Mobile Applications' featureDescription='Individual applications that run natively on iOS and Android platform in accordance to the guidelines by Apple and Google' /></Card>
                  <Card variants={item}><ServiceCard featureIcon={icon_pwa} featureTitle='Progressive Web Applications' featureDescription='Cross platform applications which allows you to launch your product faster into the market' /></Card>
                  <Card variants={item}><ServiceCard featureIcon={icon_flask} featureTitle='Test Driven Development' featureDescription='Ensure the quality of our applications and services to give you the ultimate experience' /></Card>
                </Cards>
              </SkillSub>
            </SkillCategory>
          </Box>

          {/* <Cards
            initial="hidden"
            animate="visible"
            variants={list}
          >
            <Card variants={item}><ServiceCard featureIcon={icon_layers} featureTitle='Web Design' featureDescription='Designing pixel perfect websites and interfaces' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_codeSlash2} featureTitle='Web Development' featureDescription='Quality products that you would enjoy' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='Prototyping' featureDescription='High fidelity prototypes' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Animation' featureDescription='Animations that are smooth' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_rocket} featureTitle='Branding' featureDescription='Not your usual company' /></Card>
            <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='Illustration' featureDescription='Illustrations that stands out' /></Card>
          </Cards> */}



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
                  <Row>
                    <div>
                      <Description>Computer Science</Description>
                      <Pointer>Nanyang Technological University</Pointer>
                    </div>
                    <Pointer>2022 — 2025</Pointer>
                  </Row>

                </Box>

                <Box margin='16px 0px'>
                  <Row>
                    <div>
                      <Description>Business</Description>
                      <Pointer>Nanyang Technological University</Pointer>
                    </div>
                    <Pointer>2022 — 2025</Pointer>
                  </Row>
                </Box>

                <Box margin='16px 0px'>
                  <Row>
                    <div>
                      <Description>Computer Engineering</Description>
                      <Pointer>Singapore Polytechnic</Pointer>
                    </div>
                    <Pointer>2017 — 2020</Pointer>
                  </Row>
                </Box>



                <Box margin='30px 0px'>
                  <FeaturePointer>ACCOLADES</FeaturePointer>
                </Box>

                <Box margin='16px 0px'>
                  <Row>
                    <div>
                      <Description>Edge AI Scholarship</Description>
                      <Pointer>Intel</Pointer>
                    </div>
                    <Pointer>2019</Pointer>
                  </Row>
                </Box>


                <Box margin='16px 0px'>
                  <Row>
                    <div>
                      <Description>Director's Honour Roll</Description>
                      <Pointer>Singapore Polytechnic</Pointer>
                    </div>
                    <Pointer>2019</Pointer>
                  </Row>
                </Box>

                <Box margin='16px 0px'>
                  <Row>
                    <div>
                      <Description>Engineering Scholarship</Description>
                      <Pointer>Singtel</Pointer>
                    </div>
                    <Pointer>2018</Pointer>
                  </Row>
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





      </Container>

      <Banner title="Let's work together" subtitle='DO YOU LIKE MY WORK?' />


    </Layout >
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
           
            date(formatString: "MMMM D, YYYY")
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