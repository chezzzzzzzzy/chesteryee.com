import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

import { Header, Name, Date, Text, Mega, MarginWrapper, ButtonNav, Icon, Subtitle, Category, Tag } from "../components/Collection"
import { RichText } from 'prismic-reactjs'
import ReactMarkdown from "react-markdown";
import icon_forward from '../assets/icon_forward.svg'
import icon_backward from '../assets/icon_backward.svg'


import NavCard from '../components/NavCard'

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

const Description = styled.div`
  font-size: 0.6rem;
  color: #585858;
`

const Cover = styled.img`

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`


const Category2 = styled.div`
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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;


  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

  }
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


const Part = styled.div`
  margin: 0px 0px 20px;
`

const Tags = styled.div`

`

const Post = ({ data: { prismicArticle }, pageContext }) => {


  const { data } = prismicArticle

  const x = prismicArticle.tags


  const coverUrl = data.cover.url

  // const { currentPage, numPages } = this.props.pageContext

  const prev = pageContext.prev
    ? {
      url: `/articles/${pageContext.prev.uid}`,
      title: pageContext.prev.data.title.text
    }
    : null

  const next = pageContext.next
    ? {
      url: `/articles/${pageContext.next.uid}`,
      title: pageContext.next.data.title.text
    }
    : null


  return (
    <Layout>
      <Category2><Inner>{data.category}</Inner></Category2>
      <Cover src={coverUrl} />

      <Container>
        <Name>Chester Yee</Name>
        <MarginWrapper margin='0px 0px 40px'>
          <MarginWrapper margin='6px 0px 16px'>
            <Mega>{data.title.text}</Mega>
          </MarginWrapper>
          <Tags>

            {
              x && x.map(index => <Category><Tag to={`/tags/${index}`}>{index}</Tag></Category>)
            }
          </Tags>
        </MarginWrapper>






        {
          data.body.map(slice => {
            switch (slice.slice_type) {
              case "code":
                return (

                  <div>{slice.items.map(i => {
                    const x = RichText.asText(i.code.raw)
                    return (
                      <div>
                        <div>{i.type.text}</div>
                        <ReactMarkdown source={x} style={{ width: '960px' }} />
                      </div>
                    )
                  }

                  )}</div>
                )
              case "section":
                return (
                  <div>

                    <Header>{slice.primary.sectiontitle.text}</Header>

                    <div>{slice.items.map(i => {
                      return (
                        <Part>
                          <Text>{i.sectionbody.text}</Text>
                        </Part>
                      )
                    }

                    )}</div>
                  </div>
                )
            }
          })
        }

        <MarginWrapper margin='100px 0px 0px'>

          <HC>
            {prev && (
              <NavCard direction='Previous' title={prev.title} to={prev.url} />
            )}

            {next && (
              <NavCard direction='Next' title={next.title} to={next.url} end />

            )}
          </HC>


        </MarginWrapper>



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
      tags
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
              html
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
          url(imgixParams: {q: 80})

        }
        

       
        title {
          text
        }
      }
      tags
    }
  }
`
