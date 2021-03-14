import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

import { Portrait, Name, Date } from "../components/Collection"
import { RichText } from 'prismic-reactjs'
import ReactMarkdown from "react-markdown";


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

  const rawMarkdown = RichText.asText(data.content.html)

  return (
    <Layout>
      <Category><Inner>{data.category}</Inner></Category>
      <Container>
        <Date>{data.date}</Date>
        {/* <Cover src={data.cover.fluid.src} /> */}
        <Title>{data.title.text}</Title>
        <Name>Chester Yee</Name>
        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />


        <div>Read Next</div>
        <div>
          <ReactMarkdown source={rawMarkdown} />

        </div>

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
