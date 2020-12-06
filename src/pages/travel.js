import React, { Component } from 'react'
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout'
import TravelCard from '../components/TravelCard'


const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;
`

const Articles = styled.div`
    padding: 0  rem 0rem;
`

const Article = styled(Link)`
    text-decoration: none;
    color: black;
`

export class travel extends Component {
    render() {
        return (
            <Layout>
                <Category>Travel</Category>

                <Articles>
                    {this.props.data.allPrismicTravel.edges.map(({ node }) => (
                        <Article to={node.uid}>
                            <TravelCard country={node.data.country.text} city={node.data.city.text} date={node.data.date} cover={node.data.cover.fluid.src} season={node.data.season.text} title={node.data.title.text} />
                        </Article>

                    ))}

                </Articles>

            </Layout>
        )
    }
}

export default travel


export const query = graphql`
    query {
        allPrismicTravel(sort: {fields: data___date, order: DESC}) {
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