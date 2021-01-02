import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import TravelCard from '../components/TravelCard'

const Subject = styled.div`
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

const Articles = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    padding: 0% 14%;
  }
`

const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 50px 0px;
  }
`

const Article = styled(Link)`
  text-decoration: none;
  color: black;
`

export class travel extends Component {
  render() {
    return (
      <Layout>
        <Subject>Travel</Subject>
        <ArticlesContainer>
          <Articles>
            {this.props.data.allPrismicTravel.edges.map(({ node }) => (
              <Article to={node.uid}>
                <TravelCard
                  country={node.data.country.text}
                  city={node.data.city.text}
                  date={node.data.date}
                  cover={node.data.cover.fluid.src}
                  season={node.data.season.text}
                  title={node.data.title.text}
                />
              </Article>
            ))}
          </Articles>
        </ArticlesContainer>
      </Layout>
    )
  }
}

export default travel

export const query = graphql`
  query {
    allPrismicTravel(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            season {
              text
            }
            date(formatString: "Do MMMM YYYY")
            cover {
              fluid {
                src
              }
            }
            city {
              text
            }
            country {
              text
            }
          }
        }
      }
    }
  }
`
