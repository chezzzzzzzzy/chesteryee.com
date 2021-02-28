import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const tag = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges, totalCount } = data.allPrismicArticle
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
        } tagged with "${category}"`
    return (
        <Layout>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const slug = node.uid
                    const title = node.data.title.text;
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
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
    query($category: String) {
  allPrismicArticle(filter: {data: {category: {in: [$category]}}}, sort: {order: DESC, fields: data___date}) {
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