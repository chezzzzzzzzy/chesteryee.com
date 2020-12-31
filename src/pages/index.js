import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/layout'
import GeneralCard from '../components/GeneralCard'
import cover_userInterface from '../assets/cursor.png'
import cover_userDesign from '../assets/color-picker.png'
import ProjectCard from '../components/ProjectCard'

import cover_intro from '../assets/behind mbp3.png'
import icon_mail from '../assets/mail-outline.svg'
import icon_phone from '../assets/phone-portrait-outline.svg'
import cover_mpp from '../assets/cover_mpp.png'
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
} from '../components/Collection'

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
    padding: ${props => props.theme.padding.desktop};
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
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
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

        <Section>
          <Pointer>What I Do</Pointer>
          <Title>
            I enjoy creating delightful, human-centered digital experiences.
          </Title>
          <SkillCards>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <GeneralCard
                  color="#0263FF"
                  skillCover={icon_message}
                  skillTitle="Design"
                  skillDescription="Building a harmony between users and UI"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GeneralCard
                  color="#FFCBF3"
                  skillCover={icon_toggle}
                  skillTitle="User Experience"
                  skillDescription="Creating products that provide meaningful and relevant experiences to users"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GeneralCard
                  color="#F17A8F"
                  skillCover={icon_speaker}
                  skillTitle="User Interface"
                  skillDescription="The point of human-computer interaction and communication in a device"
                />
              </SwiperSlide>
            </Swiper>
          </SkillCards>

          <Wrapper>
            <Title>I transform your ideas into reality.</Title>
            <FeatureSet>
              {/* <Left>
              <Cover data={cover_human} />
            </Left> */}
              <Features>
                <Feature>
                  <CoverIcon data={icon_flower} />
                  <div>
                    <Header active>Wireframing</Header>
                    <Description active>
                      I can transpose your project ideas into wireframes and
                      mockups to provide you a visual aid as to how you can
                      build your products.
                    </Description>
                  </div>
                </Feature>
                <Feature>
                  <CoverIcon data={icon_mockup} />
                  <div>
                    <Header active>Prototyping</Header>
                    <Description active>
                      With your concept in place, I am able to develop a Minimum
                      Viable Product (MVP) to your needs and requirements.
                    </Description>
                  </div>
                </Feature>
                <Feature>
                  <CoverIcon data={icon_desktop} />
                  <div>
                    <Header active>Stunning Apps</Header>
                    <Description active>
                      Whether its a Telegram bot that constantly reminds you to
                      wear a mask before you step out of your apartment or
                      hooking up a backend service to manage your workflow, I
                      enjoy building quality products that allows you to spend
                      time doing what you love most.
                    </Description>
                  </div>
                </Feature>
              </Features>
            </FeatureSet>
          </Wrapper>
        </Section>
      </Container>

      <Section>
        <Details>
          <Pointer>Projects</Pointer>
          <Title>Apps Built</Title>
        </Details>
        <Projects>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <ProjectCard
                skillCover={cover_mpp}
                skillTitle="Master Planner Portal"
                skillDescription="Singtel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                skillCover={cover_nlp}
                skillTitle="Language Translation"
                skillDescription="ET0732 — Machine Learning & Artificial Intelligence"
              />
            </SwiperSlide>
          </Swiper>
        </Projects>
      </Section>

      <Container>
        <Section>
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
        </Section>

        <Section>
          <Pointer>Say hello 👋🏻</Pointer>
          <Title>Let's collaborate!</Title>
          <IconLabel>
            <Icon data={icon_mail} />
            <Label>hello@chesteryee.com</Label>
          </IconLabel>
          <IconLabel>
            <Icon data={icon_phone} />
            <Label>9424 1312</Label>
          </IconLabel>
        </Section>
      </Container>
    </ThemeProvider>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    allPrismicArticle {
      edges {
        node {
          id
          uid
          url

          first_publication_date
          last_publication_date
          data {
            cover {
              fluid {
                src
              }
            }
            date(formatString: "Do MMMM YYYY")
            title {
              text
            }
            category
            description {
              text
            }
          }
        }
      }
    }
  }
`
