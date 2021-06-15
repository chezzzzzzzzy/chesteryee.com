import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Subject,
  Container,
  Category,
  Box,
  Button
} from '../components/Collection'
import MoreStoriesCard from '../components/MoreStoriesCard'


const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`

const Tag = styled(Link)`
  text-decoration: none;
  color: inherit;

`


const tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allPrismicBlogPost
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
  return (
    <Layout>
      <Container style={{ padding: '0px 20px', maxWidth: '1200px', margin: '0px auto' }}>

        <div>{tagHeader}</div>

        <Box margin='20px 0px'>
          {edges.map(({ node }) => {
            const uid = node.uid
            const title = node.data.title.text
            return (
              <Box margin='24px 0px'>
                <Tag key={uid} to={`/blog/` + uid}>
                  <MoreStoriesCard
                    cover={node.data.cover.fluid.src}
                    title={node.data.title.text}
                    date={node.data.date}
                  />
                </Tag>



              </Box>

            )
          })}

          <Box margin='48px 0px'>

            <Tag to="/tags">
              <Button>All Tags</Button>
            </Tag>
          </Box>
        </Box>


      </Container>




    </Layout>
  )
}


export default tag

export const pageQuery = graphql`
  query($tag: String) {
    allPrismicBlogPost(
            filter: {tags: {in: [$tag]}},
      sort: {order: DESC, fields: data___date}) {
          totalCount
      edges {
          node {
          uid
            url
            data {
          cover {
          fluid {
          src
        }
            }
            date(formatString: "MMMM D, YYYY")
            title {
          text
        }
            

            subtitle {
          text
        }
          }
        }
      }
    }
  }

`