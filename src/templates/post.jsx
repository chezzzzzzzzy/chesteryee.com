import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

import { Portrait, Name, Date, Mega, MarginWrapper, ButtonNav, Icon } from "../components/Collection"
import { RichText } from 'prismic-reactjs'
import ReactMarkdown from "react-markdown";
import icon_forward from '../assets/icon_forward.svg'
import icon_backward from '../assets/icon_backward.svg'


const Container = styled.div`
  padding: 30px 1.4rem;
  overflow-wrap: normal;
  max-width: 100%;

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
  border-radius: 6px;
`


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

const Middle = styled.div`
  text-align: center;
`


const HC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const handleNav = (direction) => {
  if (direction == 'left') {
    this.navRef ? (this.navRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    })) : null
  } else {
    this.navRef ? (this.navRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    })) : null
  }
}


const Post = ({ data: { prismicArticle } }) => {


  const { data } = prismicArticle

  const rMD = data.body.map(slice => {
    switch (slice.slice_type) {
      case "code":
        return (
          <div>{slice.primary.implementation.raw}</div>
        )
    }
  })


  return (
    <Layout>
      <Category><Inner>{data.category}</Inner></Category>
      <Container>
        <Middle>
          <Name>Chester Yee</Name>
          <MarginWrapper margin='10px 0px 40px'>
            <Mega>{data.title.text}</Mega>
          </MarginWrapper>
        </Middle>
        <Cover src={data.cover.fluid.src} />
        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />


        <MarginWrapper margin='24px 0px'>
          <HC>
            <Title>You might also like</Title>
            <HC>
              <ButtonNav onClick={() => this.handleNav('left')}><Icon data={icon_backward} /></ButtonNav>
              <ButtonNav onClick={() => this.handleNav('right')} style={{ marginLeft: '6px' }}><Icon data={icon_forward} /></ButtonNav>
            </HC>

          </HC>

        </MarginWrapper>

        <ReactMarkdown source={rMD} style={{ width: '960px' }} />


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
        body {
        ... on PrismicArticleBodyCode {
          slice_type
          primary {
            implementation {
              text
            }
          }
          items {
            code {
              raw
              text
            }
            type {
              text
            }
          }
         
        }
        ... on PrismicArticleBodySection {
          slice_type
          primary {
            sectiontitle {
              text
            }
          }
          items {
            sectionbody {
              text
            }
          }
        }
        __typename

      }

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

        markdown {
          raw
          html
        }
        title {
          text
        }
      }
      tags
    }
  }
`
