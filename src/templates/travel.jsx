import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"

import { Portrait, Name, Date, Subject, Mega, MarginWrapper } from "../components/Collection"

const Container = styled.div`
  padding: 30px 1.4rem;

  @media screen and (min-width: 768px) {
    padding: 30px 14%;
    max-width: 1060px;
    margin: 0 auto;
  }
`

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.6rem 0;
`

const Subtitle = styled.div``
const Description = styled.div`
  font-size: 0.6rem;
  color: #585858;
`

const Cover = styled.img`
  width: 100%;
  object-fit: cover;


  @media screen and (min-width: 768px) {
    height: 60vh;

  }

`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 0;
`



const Content = styled.div`
  color: #b9b9b9;
  max-width: 100%;
`



const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`


const Travel = ({ data: { prismicTravel } }) => {
  const { data } = prismicTravel
  return (
    <Layout>
      <Subject><Inner>{data.season.text}</Inner></Subject>
      <Cover src={data.cover.fluid.src} />
      <Container>
        <Name>Chester Yee</Name>
        <MarginWrapper margin='0px 0px 32px'>
          <Mega>{data.title.text}</Mega>
        </MarginWrapper>

        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </Container>
    </Layout>
  )
}
export default Travel

export const pageQuery = graphql`
  query PostBySlug2($uid: String!) {
    prismicTravel(uid: { eq: $uid }) {
      url
      uid
      data {
        date(formatString: "Do MMMM YYYY")
        content {
          html
          raw
          text
        }
        cover{
          fluid{
            src
          }
        }
        country {
          text
        }
        city {
          text
        }
        title {
          text
        }
        season {
          text
        }
      }
    }
  }
`
