import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled, { keyframes } from 'styled-components'
import ExperienceCard from '../components/ExperienceCard'
import experience from '../assets/experience.json'
import education from '../assets/education.json'
import accolades from '../assets/accolades.json'
import profile from '../assets/linkedin profile.jpg'
import map_singapore from '../assets/map_singapore.svg'
import logo_reniu from '../assets/logo_reniu.png'
import logo_singtel from '../assets/logo_singtel.png'
import logo_citc from '../assets/logo_citc.png'
import logo_sk from '../assets/logo_sk.png'
import icon_github from '../assets/logo-github.svg'
import icon_instagram from '../assets/logo-instagram.svg'
import {
  Container,
  Section,
  Subject,
  Title,
  Description,
  Wrapper,
  MarginWrapper,
  Cover,
  Pointer,
  CoverBrands,
  FeaturePointer,
  Statistics,
  SectionGrid,

} from '../components/Collection'
import Banner from '../components/Banner'
import Img from 'gatsby-image'
import Pulse2 from '../components/Pulse'



const Icon = styled.object`
  height: 16px;
`


const StatisticsBlock = styled.div`

`
const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`

const Split = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
`

const Cards = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-gap: 2px;
  width: 100%;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`

const Companies = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  width: 100%;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`


const Socials = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 14%;
`

const Pulsate = keyframes`
  from {
    transform: scale(0.8);
		box-shadow: 0 0 0 0 #60A9FF;  
  }

  to {
    transform: scale(1);
		box-shadow: 0 0 0 10px #60A9FF;
  }

  to {
    transform: scale(0.7);
		box-shadow: 0 0 0 0 #60A9FF;
  }
`;



const Pulse = styled.div`
  background: #60A9FF;
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;
  position: relatvie;
  left: 100;
  top: 100;
  z-index: 1000;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
  animation: ${Pulsate} 1s linear infinite;

`

const Left = styled.div`

  width: 100%;

  @media (${props => props.theme.mediaQueries.laptop}) {
    width: 70%
  }
`

const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`


const About = ({ data }) => {
  return (



    <Layout>
      <Subject><Inner>About</Inner></Subject>


      <SectionGrid black>

        {/* <Cover data={profile} /> */}
        <Img fluid={data.file.childImageSharp.fluid} />

        <MarginWrapper margin='30px 1.4rem'>

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



          <MarginWrapper margin='30px 0px'>

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


            <MarginWrapper margin='30px 0px'>
              <FeaturePointer>PROFESSIONAL EXPERIENCE</FeaturePointer>
            </MarginWrapper>

            <MarginWrapper margin='16px 0px'>
              <Description>
                Co-Founder
        </Description>
              <Pointer>RENIU</Pointer>
            </MarginWrapper>

            <MarginWrapper margin='16px 0px'>
              <Description>
                Intern
        </Description>
              <Pointer>Singtel</Pointer>
            </MarginWrapper>

            <MarginWrapper margin='16px 0px'>
              <Description>
                Teaching Assistant / Instructor
        </Description>
              <Pointer>Code in the Community</Pointer>
            </MarginWrapper>

          </MarginWrapper>


          <Socials>
            <Icon data={icon_github}><a href='github.com/chezzzzzzzzy'></a></Icon>
            <Icon data={icon_instagram}><a href='instagram.com/chezy'></a></Icon>
          </Socials>


        </MarginWrapper>


      </SectionGrid>





      <Container>

        <MarginWrapper margin='30px 0px'>
          <SectionGrid center>
            <Left>
              <MarginWrapper margin='4px 0px'>
                <FeaturePointer>LOCATION</FeaturePointer>
              </MarginWrapper>
              <Title>Singapore</Title>
              <Wrapper margin='16px 0px'>
                <Description>
                  I am currently living in the Republic of Singapore. From my lab, I help to position companies and start-ups in the digital world.
            </Description>
              </Wrapper>
            </Left>
            <div>
              <Cover data={map_singapore} />
              <Pulse2 />
            </div>
          </SectionGrid>
        </MarginWrapper>


        <MarginWrapper margin='30px 0px'>
          <Section center>
            <MarginWrapper margin='30px 0px'>
              <FeaturePointer>EDUCATION</FeaturePointer>
            </MarginWrapper>
            <Cards>
              {education.map(e => {
                return (
                  <ExperienceCard
                    entity={e.entity}
                    description={e.degree}
                    timeframe={e.timeframe}
                  />
                )
              })}
            </Cards>

          </Section>
        </MarginWrapper>

        <MarginWrapper margin='30px 0px'>
          <Section center>
            <MarginWrapper margin='30px 0px'>
              <FeaturePointer>ACCOLADES</FeaturePointer>
            </MarginWrapper>
            <Cards>
              {accolades.map(e => {
                return (
                  <ExperienceCard
                    entity={e.name}
                    description={e.name}
                    timeframe={e.provider}
                  />
                )
              })}
            </Cards>

          </Section>
        </MarginWrapper>

        <MarginWrapper margin='30px 0px'>
          <Section center>
            <MarginWrapper margin='30px 0px'>
              <FeaturePointer>COMPANIES I WORKED WITH</FeaturePointer>
            </MarginWrapper>
            <Companies>
              <CoverBrands data={logo_reniu} />
              <CoverBrands data={logo_singtel} />
              <CoverBrands data={logo_citc} />
              <CoverBrands data={logo_sk} />
            </Companies>

          </Section>
        </MarginWrapper>



      </Container>
      <Banner />
    </Layout >
  )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    file(relativePath: { eq: "assets/linkedin profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default About
