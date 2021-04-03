import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allPrismicArticle
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { uid } = node.uid
          const title = node.data.title.text
          return (
            <li key={uid}>
              <Link to={uid}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}


export default tag

export const pageQuery = graphql`
  query($tags: String) {
    allPrismicArticle(
      filter: {tags: {in: [$tags]}},
      sort: {order: DESC, fields: data___date}) {
      totalCount
      edges {
        node {
            uid
            url
          data {
            title {
              text
            }
          }
        }
      }
    }
  }

`