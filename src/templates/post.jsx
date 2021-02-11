import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

import { Portrait, Name, Date } from "../components/Collection"

const Container = styled.div`
  padding: 30px 1.4rem;
  overflow-wrap: normal;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    padding: 30px 14%;
    max-width: 1260px;
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
  border-radius: 8px;
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 0;
`
// `
// const Name = styled.div`
//   font-size: 0.6rem;
//   color: #b9b9b9;
//   font-weight: bold;
// `

// const Date = styled.div`
//   font-size: 0.7rem;
//   color: #585858;
//   font-weight: bold;
// ``

const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;

  @media screen and (min-width: 768px) {
    padding: 0.6rem 14%;
  }
`

const Content = styled.div`
  color: #b9b9b9;
  width: 100%;
  overflow-wrap: normal;
`


const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`



const Post = ({ data: { prismicArticle } }) => {
  const { data } = prismicArticle
  return (
    <Layout>
      <Category><Inner>{data.category}</Inner></Category>
      <Container>
        <Date>{data.date}</Date>
        {/* <Cover src={data.cover.fluid.src} /> */}
        <Title>{data.title.text}</Title>
        <Profile>
          <Portrait
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQH7Hr4lav5A4A/profile-displayphoto-shrink_400_400/0/1607911342354?e=1614211200&v=beta&t=c_MO7Nt7aseitV5f-Bq7WPb3HouV-xMAFxfrr3j-q_Q"
            }
          ></Portrait>
          <div>
            <Name>Chester Yee</Name>
            <Description>Aspiring Software Engineer</Description>
          </div>
        </Profile>
        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </Container>
    </Layout>
  )
}
export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicArticle(uid: { eq: $uid }) {
      url
      uid
      data {
        category

        date(formatString: "Do MMMM YYYY")
        cover {
          fluid {
            src
          }
        }
        content {
          html
          raw
          text
        }
        title {
          text
        }
      }
      tags
    }
  }
`
