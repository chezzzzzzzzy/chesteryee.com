import React from 'react'
import { Link, graphql } from 'gatsby'

const tag = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allPrismicArticle
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`
    return (
        <div>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const slug = node.url
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
        </div>
    )
}


export default tag

export const pageQuery = graphql`
    query {
        allPrismicArticle(sort: {fields: data___date, order: DESC}) {
            edges {
                node {
                    url
                    data {
                        title {
                            text
                        }
            }   
        } 
    }
    totalCount
  }
    }
`