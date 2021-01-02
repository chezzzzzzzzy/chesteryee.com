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
import cover_mpp2 from '../assets/cover_mpp2.png'
import cover_nlp from '../assets/cover_nlp.png'

import icon_speaker from '../assets/interface.png'
import icon_mockup from '../assets/project.png'
import icon_toggle from '../assets/toggle.png'
import icon_message from '../assets/message.png'
import icon_flower from '../assets/flower.png'
import icon_desktop from '../assets/desktop.png'

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
  Button
} from '../components/Collection'



// assets
import icon_laptop from '../assets/laptop-outline.svg'
import icon_hammer from '../assets/hammer-outline.svg'
import icon_expand from '../assets/expand-outline.svg'
import icon_shapes from '../assets/shapes-outline.svg'
import ServiceCard from '../components/ServiceCard'

const ArticleDate = styled(Date)`
  margin: 6px 0px;
`

const TitleContainer = styled(Title)`
  padding: 0.8em 0em;
`

const Articles = styled.div`
  display: flex;
  flex-direction: column;
`

const Article = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 0px;
`

const SectionSplit = styled.div`
  margin: 50px 0px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    align-items: center;
    /* padding: ${props => props.theme.padding.desktop}; */
    height: 90vh;
  }
`

const SkillCards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 40px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

const Projects = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 1260px;
    grid-template-columns: 1fr 1fr;
  }
`

const CoverIcon = styled.object`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const Details = styled.div`
  padding: 0 1.4rem;
`

const FeatureSet = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 2fr; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Feature = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-gap: 16px;

  padding: 24px 0px;
`
const Features = styled.div`
  display: flex;
  flex-direction: column;
`

const Left = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
`








const Cards = styled(motion.ul)`
    display: grid;
    grid-gap: 1rem;


    @media (${props => props.theme.mediaQueries.laptop}) {
      max-width: 1260px;

        grid-template-columns: 1fr 1fr;
    }


`

const Card = styled(motion.li)`
`

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}



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

const Index = props => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Container>
        <SectionSplit>
          <Left>
            <Mega>Hello,</Mega>
            <Mega>I'm Chester</Mega>

            <TitleContainer active>Aspiring Software Engineer</TitleContainer>

            <Description>
              Incoming Computer Science and Business undergraduate student at
              Nanyang Technological University based in Singapore.
            </Description>
          </Left>

          <motion.div animate={{ scale: 0.8 }}>
            <Cover data={cover_intro} />
          </motion.div>
        </SectionSplit>

       


        <Section center>
          <Wrapper center margin='30px 0px'>
            <Pointer>What I Do</Pointer>
            <Title>Services</Title>
            <Cards
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <Card variants={item}><ServiceCard featureIcon={icon_laptop} featureTitle='WEB DESIGN ( UI / UX )' featureDescription='My core business is designing pixel perfect websites and interfaces.' /></Card>
              <Card variants={item}><ServiceCard featureIcon={icon_hammer} featureTitle='WEB DEVELOPMENT' featureDescription='Whether its a Telegram bot that constantly reminds you to wear a mask before you step out of your apartment or hooking up a backend service to manage your workflow, I enjoy building quality products that allows you to spend time doing what you love most.' /></Card>
              <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='PROTOTYPING' featureDescription='I use high fidelity prototypes to learn how your website interacts.' /></Card>
              <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='ILLUSTRATION' featureDescription='In addition to UI/UX, I also make illustrations and animations.' /></Card>
            </Cards>
          </Wrapper>

        </Section>


        <Section center>
          <Wrapper center margin='30px 0px'>
            <Pointer>Projects</Pointer>
            <Title>Recent Work</Title>
          </Wrapper>
          <Projects>

            <ProjectCard
              skillCover={cover_mpp2}
              skillTitle="Master Planner Portal"
              skillDescription="Singtel"
            />

            <ProjectCard
              skillCover={cover_nlp}
              skillTitle="Language Translation"
              skillDescription="ET0732 — MLAI"
            />

          </Projects>
        </Section>
      </Container>


      <Container>
        {/* <Section>
          <Pointer>Articles</Pointer>
          <Title>Latest reads</Title>
          <Articles>
            {props.data.allPrismicArticle.edges.map(({ node }) => (
              <Article to={node.uid}>
                <ArticleTitle>{node.data.title.text}</ArticleTitle>
                <ArticleDate>{node.data.date}</ArticleDate>
              </Article>
            ))}
          </Articles>
        </Section> */}

        <Section center>
          <Wrapper center margin='30px 0px'>
            <Pointer>Say hello 👋🏻</Pointer>
            <Title>Let's collaborate!</Title>
          </Wrapper>
          {/* <IconLabel>
            <Icon data={icon_mail} />
            <Label>hello@chesteryee.com</Label>
          </IconLabel>
          <IconLabel>
            <Icon data={icon_phone} />
            <Label>9424 1312</Label>
          </IconLabel> */}
          <Button>Get in touch</Button>
        </Section>
      </Container>
    </ThemeProvider>
  </Layout>
)

export default Index

// export const query = graphql`
//   query {
//     allPrismicArticle(limit: 4) {
//       edges {
//         node {
//           id
//           uid
//           url

//           data {
//             cover {
//               fluid {
//                 src
//               }
//             }
//             date(formatString: "Do MMMM YYYY")
//             title {
//               text
//             }
//             category
//             description {
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `
