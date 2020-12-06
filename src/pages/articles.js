import React, { Component, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import ArticleCard from '../components/ArticleCard'

import styled from 'styled-components'
import { gsap } from 'gsap';


const Articles = styled.div`
    padding: 2rem 1rem;
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
`


export class articles extends Component {
  render() {
    return (
      <Layout>
        <Category>Code</Category>

        {/* <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4> */}
        <Articles>
          {this.props.data.allPrismicArticle.edges.map(({ node }) => (
            <Article to={node.uid}>

              <ArticleCard
                cover={node.data.cover.fluid.src}
                title={node.data.title.text}
                description={node.data.description.text}
                portrait={
                  "https://media-exp1.licdn.com/dms/image/C5103AQEsUFYxspmCvg/profile-displayphoto-shrink_400_400/0/1566280397476?e=1611792000&v=beta&t=VvVxhFZ0w0AdVkIlRdUNwLPo9xLL7zeOIfp67_4q6NA"
                }
                name='Chester Yee'
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
          fields{
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
            description{
              text
            }
        }
      }
    }
    }
  }
`