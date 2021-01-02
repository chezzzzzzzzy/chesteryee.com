import React, { Component, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ArticleCard from '../components/ArticleCard'

import styled from 'styled-components'


const Articles = styled.div`
  padding: 2rem 1rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${props => props.theme.padding.desktop};
  }
`

const Article = styled(Link)`
  text-decoration: none;
  color: black;
`

const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;

  @media screen and (min-width: 768px) {
    padding: 0.6rem 14%;
    font-size: 1.6rem;
  }
`

export class articles extends Component {
  render() {
    return (
      <Layout>
        <Category>Code</Category>

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
            description {
              text
            }
          }
        }
      }
    }
  }
`
