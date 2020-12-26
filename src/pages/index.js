import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";


import Layout from "../components/layout";
import GeneralCard from "../components/GeneralCard";
import cover_userInterface from "../assets/cursor.png";
import cover_userDesign from "../assets/color-picker.png";
import ProjectCard from "../components/ProjectCard";

import cover_intro from "../assets/behind mbp3.png";
import cover_human from "../assets/human.png";
import icon_mail from "../assets/mail-outline.svg";
import icon_phone from "../assets/phone-portrait-outline.svg";
import cover_mpp from "../assets/cover_mpp.png";
import cover_nlp from "../assets/cover_nlp.png";

import icon_mobile from "../assets/paint.png";
import icon_pencil from "../assets/heart.png";
import icon_speaker from "../assets/interface.png";
import icon_mockup from '../assets/project.png';
import icon_toggle from '../assets/toggle.png';
import icon_message from '../assets/message.png';
import icon_flower from '../assets/flower.png';
import icon_desktop from '../assets/desktop.png';

import theme from "../styles/theme";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


import ArticleCard from "../components/ArticleCard";

const Articles = styled.div`


    display: grid;
    grid-template-columns: 1fr;


    @media screen and (min-width: 768px) {
        
        
    }
`;


const Article = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ArticleDetails = styled.div`
  padding: 10px 0px;
`



const ArticleTitle = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
`;

const ArticleDate = styled.div`
    font-size: 0.8em;
    color: #B9B9B9;
    margin-top: 6px;
`;


const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.mobile_title};
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.desktop_title};
  }

`;

const Subtitle = styled.div`
  font-size: 1.1em;
  padding: 0.6rem 0;
  color: ${(props) => props.active ? "white" : "#1E90FF"};
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.desktop_subtitle};
  }

`;


const Description = styled.div`
  font-size: 0.9em;
  padding: 0.6rem 0;
  line-height: 1.4;
  color: ${(props) => props.active ? "#B9B9B9" : "white"};


  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.desktop_description};
  }
  
`;

const Pointer = styled.div`
  font-size: 0.67em;
  font-weight: bold;
  color: #585858;


  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.desktop_pointer};
  }

`;


const Container = styled.div`
  display: flex;
  padding: ${(props) => props.theme.padding.mobile};
  height: 100%;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* padding: ${(props) => props.theme.padding.desktop}; */
   
  }

`;

const SectionSplit = styled.div`
  margin: 50px 0px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1.6fr;
    align-items: center;
    padding: ${(props) => props.theme.padding.desktop};
    height: 90vh;

  }
`;
const Section = styled.div`
  margin: 50px 0px;

  @media screen and (min-width: 768px) {
    padding: ${(props) => props.theme.padding.desktop};

  }
`;

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

  @media screen and (min-width: 768px) {
    display: grid;
    width: 100%;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

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

  @media screen and (min-width: 768px) {
    display: grid;
    width: 100%;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }

`;

const Cover = styled.object`
  width: 100%;
  
`;

const CoverIcon = styled.object`
  width: 100%;
`

const Details = styled.div`
    padding: 0 1.4rem;

`;


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

  padding: 16px 0px;

`
const Features = styled.div`
  display: flex;
  flex-direction: column;
`



const Icon = styled.object`
  color: white;
  filter: invert(100%);
  width: 20px;
  height: 20px;
`;

const InfoRow = styled.div`
  /* display: flex;
  flex-direction: row;
  align-self: center; */
  display: flex;
  align-items: center;
  margin: 8px 0px;

  
`;
const Info = styled.div`
  color: #B9B9B9;
  font-size: 0.8rem;
  margin-left: 8px;
`;

const Left = styled.div`

  @media screen and (min-width: 768px) {
    max-width: 60%;
  }

`;

const Index = (props) => (

  <Layout>
    <ThemeProvider theme={theme}>

      <Container>


        <SectionSplit>
          <Left>

            <Title>Hello,</Title>
            <Title>I'm Chester</Title>

            <Subtitle>Aspiring Software Engineer</Subtitle>

            <Description>
              Incoming Computer Science and Business undergraduate
              student at Nanyang Technological University based in
              Singapore.
            </Description>
          </Left>


          <Cover data={cover_intro} />
        </SectionSplit>

        <Section>
          <Pointer>What I Do</Pointer>
          <Subtitle active >I enjoy creating delightful, human-centered digital experiences.</Subtitle>
          <SkillCards>

            {window.innerWidth > 768 ?
              <>
                <GeneralCard color='#0263FF' skillCover={icon_message} skillTitle='User Interface' skillDescription='Building a harmony between users and UI' />
                <GeneralCard color='#FFCBF3' skillCover={icon_toggle} skillTitle='User Experience' skillDescription='User experience is the singular and accumulated experiences that occur for users as a consequence of them interacting with an object in a given context' />
                <GeneralCard color='#F17A8F' skillCover={icon_speaker} skillTitle='User Interface' skillDescription='We have got quite a few already made templates for better project management that you can use now.' />
              </>
              :


              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide><GeneralCard color='#0263FF' skillCover={icon_message} skillTitle='User Interface' skillDescription='Building a harmony between users and UI' /></SwiperSlide>
                <SwiperSlide><GeneralCard color='#FFCBF3' skillCover={icon_toggle} skillTitle='User Experience' skillDescription='User experience is the singular and accumulated experiences that occur for users as a consequence of them interacting with an object in a given context' /></SwiperSlide>
                <SwiperSlide><GeneralCard color='#F17A8F' skillCover={icon_speaker} skillTitle='User Interface' skillDescription='We have got quite a few already made templates for better project management that you can use now.' /></SwiperSlide>
              </Swiper>


            }



          </SkillCards>


          <Subtitle active >I can bring your project to live</Subtitle>

          <FeatureSet>
            {/* <Left>
              <Cover data={cover_human} />
            </Left> */}

            <Features>

              <Feature>
                <CoverIcon data={icon_flower} />
                <div>
                  <Subtitle active>Wireframing</Subtitle>
                  <Description active>
                    I can transpose your project ideas into wireframes and mockups to provide you a visual aid as to how you can build your products.
                  </Description>
                </div>
              </Feature>
              <Feature>
                <CoverIcon data={icon_mockup} />
                <div>
                  <Subtitle active>Prototyping</Subtitle>
                  <Description active>
                    With your concept in place, I am able to develop a Minimum Viable Product (MVP) to your needs and requirements.
                  </Description>
                </div>
              </Feature>
              <Feature>
                <CoverIcon data={icon_desktop} />
                <div>
                  <Subtitle active>Stunning Apps</Subtitle>
                  <Description active>
                    Whether its a Telegram bot that constantly reminds you to wear a mask before you step out of your apartment or hooking up a backend service to manage your workflow, I enjoy building quality products that allows you to spend time doing what you love most.
                  </Description>
                </div>
              </Feature>
            </Features>
          </FeatureSet>




        </Section>



      </Container>


      <Section>
        <Details>
          <Pointer>Projects</Pointer>
          <Subtitle active>Apps which I have built</Subtitle>
        </Details>
        <ProjectCards>

          {window.innerWidth > 768 ?
            <>
              <ProjectCard skillCover={cover_mpp} skillTitle='Master Planner Portal' skillDescription='Singtel' />
              <ProjectCard skillCover={cover_nlp} skillTitle='Language Translation' skillDescription='ET0732 — Machine Learning & Artificial Intelligence' />
            </>

            :

            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><ProjectCard skillCover={cover_mpp} skillTitle='Master Planner Portal' skillDescription='Singtel' /></SwiperSlide>
              <SwiperSlide><ProjectCard skillCover={cover_nlp} skillTitle='Language Translation' skillDescription='ET0732 — Machine Learning & Artificial Intelligence' /></SwiperSlide>
            </Swiper>

          }
        </ProjectCards>
      </Section>


      <Container>

        <Section>
          <Pointer>Articles</Pointer>
          <Subtitle active>Latest reads</Subtitle>



          <Articles>
            {props.data.allPrismicArticle.edges.map(({ node }) => (
              <Article to={node.uid}>
                <ArticleDetails>
                  <ArticleTitle>{node.data.title.text}</ArticleTitle>
                  <ArticleDate>{node.data.date}</ArticleDate>
                </ArticleDetails>


              </Article>
            ))}
          </Articles>
        </Section>

        <Section>
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

        </Section>
      </Container>


    </ThemeProvider>

  </Layout >

);


export default Index;


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
            description{
              text
            }
        }
      }
    }
    }
  }
`;
