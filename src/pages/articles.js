import React, { Component, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ArticleCard from '../components/ArticleCard'

import styled from 'styled-components'
import { Title, Subject, FeaturePointer, MarginWrapper, HR } from '../components/Collection'


const Articles = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    width: 1260px;
    margin: 0 auto;    
  }
`

const Container = styled.div`
  padding: 0 1rem;
  max-width: 1260px;
  margin: auto;    
`


const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`


const Article = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 8px 0px;
`
const LatestArticle = styled.div`

`

export class articles extends Component {
  render() {
    return (
      <Layout>
        <Subject><Inner>Code</Inner></Subject>

        <Container>
          <MarginWrapper margin='30px 0px'>
            <Title>My Development Journal</Title>
          </MarginWrapper>

          <LatestArticle>

            <Article to={this.props.data.prismicArticle.uid}>

              <ArticleCard
                focus
                width='600px'
                height='300px'
                category={this.props.data.prismicArticle.data.category}
                cover={this.props.data.prismicArticle.data.cover.fluid.src}
                title={this.props.data.prismicArticle.data.title.text}
                description={this.props.data.prismicArticle.data.description.text}
                portrait={
                  'https://media-exp1.licdn.com/dms/image/C5603AQH7Hr4lav5A4A/profile-displayphoto-shrink_400_400/0/1607911342354?e=1614211200&v=beta&t=c_MO7Nt7aseitV5f-Bq7WPb3HouV-xMAFxfrr3j-q_Q'
                }
                name="Chester Yee"
                date={this.props.data.prismicArticle.data.date}
              />
            </Article>



          </LatestArticle>

          <MarginWrapper margin='24px 0px'>
            <MarginWrapper margin='4px 0px'>
              <FeaturePointer>LATEST ARTICLES</FeaturePointer>
            </MarginWrapper>
            <HR></HR>
          </MarginWrapper>




          <Articles>
            {this.props.data.allPrismicArticle.edges.map(({ node }) => (
              <Article to={node.uid}>
                <ArticleCard

                  category={node.data.category}
                  cover={node.data.cover.fluid.src}
                  title={node.data.title.text}
                  description={node.data.description.text}
                  portrait={
                    'https://media-exp1.licdn.com/dms/image/C5603AQH7Hr4lav5A4A/profile-displayphoto-shrink_400_400/0/1607911342354?e=1614211200&v=beta&t=c_MO7Nt7aseitV5f-Bq7WPb3HouV-xMAFxfrr3j-q_Q'
                  }
                  name="Chester Yee"
                  date={node.data.date}
                />
              </Article>
            ))}
          </Articles>
        </Container>

      </Layout>
    )
  }
}

export default articles

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }

    prismicArticle {
      uid

    data {
      title {
        text
      }
      description {
        text
      }
      date(formatString: "Do MMMM YYYY")
      cover {
        fluid {
          src
        }
      }
      content {
        text
      }
      category
    }
  }

    allPrismicArticle(skip: 1) {
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
