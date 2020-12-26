import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard";
import experience from "../assets/experience.json";
import education from "../assets/education.json";
import accolades from "../assets/accolades.json";
import icon_document from "../assets/docRightISO.svg";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";


const Container = styled.div`
  display: flex;
  padding: 0 1.4rem;
  height: 100%;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: ${(props) => props.theme.padding.desktop};
    }

`;

const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;

  @media screen and (min-width: 768px) {
    padding: 0.6rem 14%;
    }   
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.6rem 0;
`;

const Subtitle = styled.div``;
const Description = styled.div`
  font-size: 0.6rem;
  color: #585858;
`;

const Section = styled.div`
    margin: 20px 0px;
`;

const Icon = styled.object`
  width: 20%;
`;

const About = ({ data }) => (

  <Layout>
    <ThemeProvider theme={theme}>

      <Category>About</Category>
      <Container>
        <Section>
          <Icon data={icon_document} />
          <Title>Experience</Title>
          {
            experience.map((e) => {
              return (
                <ExperienceCard entity={e.entity} description={e.position} timeframe={e.timeframe} />
              );
            })
          }

        </Section>
        <Section>

          <Title>Education</Title>
          {
            education.map((e) => {
              return (
                <ExperienceCard entity={e.entity} description={e.degree} timeframe={e.timeframe} />
              );
            })
          }

        </Section>
        <Section>
          <Title>Accolades</Title>
          {
            accolades.map((e) => {
              return (
                <ExperienceCard entity={e.provider} description={e.name} timeframe={e.year} award={e.award} />
              );
            })
          }

        </Section>

      </Container>
    </ThemeProvider>

  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default About;

