import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import { H1, H2, H3, H4, H5, Tag } from '../components/Collection'

import ReactMarkdown from 'react-markdown'
import { RichText } from 'prismic-reactjs'

import { withPreview } from 'gatsby-source-prismic'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.4rem;
`

const Figure = styled.figure`
  margin: 0 auto;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 1100px;
  }
`

const Cover = styled.img`
  margin: 2rem auto;
  height: 300px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 600px;
    border-radius: 6px;
  }
`

const Title = styled(H4)`
  font-weight: 600;
  margin-top: 4rem;
  margin-bottom: 1rem;
  color: black;
`

const Subtitle = styled.div`
  font-size: 0.85rem;
  color: black;
`

const Content = styled.div`
  margin: 3rem 0;
  color: black;
`

const Part = styled.div`
  margin: 0px 0px 20px;
`

const blogPost = ({ data: { prismicBlogPost }, pageContext }) => {
  const { data } = prismicBlogPost

  const x = prismicBlogPost.tags

  const coverUrl = data.cover.url

  const prev = pageContext.prev
    ? {
        url: `/blog/${pageContext.prev.uid}`,
        title: pageContext.prev.data.title.text,
      }
    : null

  const next = pageContext.next
    ? {
        url: `/blog/${pageContext.next.uid}`,
        title: pageContext.next.data.title.text,
      }
    : null
  return (
    <Layout>
      <Container>
        <Title>{data.title.text}</Title>
        <Subtitle>
          By Chester Yee · {data.date} · {}
          {x && x.map(index => <Tag to={`/tags/${index}`}>{index} </Tag>)}
        </Subtitle>
      </Container>

      <Figure>
        <Cover src={coverUrl} />
      </Figure>
      <Container>
        <Content>
          {
            /* {data.body.map(slice => {
            switch (slice.slice_type) {
              case 'code_slice':
                return (
                  <div>
                    {slice.items.map(i => {
                      const x = RichText.asText(i.code.raw)
                      return (
                        <div>
                          <div>{i.type.text}</div>
                          <ReactMarkdown
                            source={x}
                            style={{ width: '960px' }}
                          />
                        </div>
                      )
                    })}
                  </div>
                )
              case 'content_slice':
                return (
                  <div>
                    {slice.items.map(i => {
                      return <Part>{i.sectionbody.text}</Part>
                    })}
                  </div>
                )
            }
          })} */

            data.body.map(slice => {
              switch (slice.slice_type) {
                case 'content_slice':
                  return <RichText render={slice.primary.description.raw} />

                case 'code_slice':
                  return <RichText render={slice.primary.snippet.raw} />
              }
            })

            // console.log(data.body)
          }
        </Content>
      </Container>
    </Layout>
  )
}

export default blogPost

export const blogPostQuery = graphql`
  query PostBySlug3($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      data {
        cover {
          url
        }
        date(formatString: "MMMM D, YYYY")
        subtitle {
          text
        }
        title {
          text
        }
        body {
          ... on PrismicBlogPostBodyCodeSlice {
            id
            primary {
              snippet {
                html
                raw
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyContentSlice {
            id
            slice_type
            primary {
              description {
                html
                raw
                text
              }
            }
          }
        }
      }
      uid
      url
      tags
    }
  }
`
