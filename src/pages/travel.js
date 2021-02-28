import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import TravelCard from '../components/TravelCard'

import { Subject } from '../components/Collection'


const Articles = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    max-width: 1260px;
    width: 100%;
  }
`

const ArticlesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 1.4rem;

  @media screen and (min-width: 768px) {
    padding: 50px 0px;
  }
`

const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`


const Article = styled(Link)`
  text-decoration: none;
  color: black;
`

export class travel extends Component {

  render() {


    return (
      <Layout>
        <Subject>
          <Inner>
            Travel
          </Inner>
        </Subject>


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
  query{
  # query allPrismicTravel($skip: Int!, $limit: Int!){
    allPrismicTravel(
      sort: { fields: data___date, order: DESC }
      # limit: $limit
      # skip: $skip
      ) {
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
