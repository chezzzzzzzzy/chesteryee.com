import React, {Component} from "react";
import {Link, graphql} from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import TravelCard from "../components/TravelCard";
import japanFlag from "../assets/japanFlag.svg";

const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;

     
  @media screen and (min-width: 768px) {
    padding: 0.6rem 14%;
    }   
`;

const Articles = styled.div`
   

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        width: 100%;
        padding: 0% 14%;

    }

`;

const ArticlesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
        padding: 50px 0px;
    }
`;

const Article = styled(Link)`
    text-decoration: none;
    color: black;

`;


const Countries = styled.div`
    display: flex;
    overflow-x: hidden;
    justify-content: start;
`;

const Map = styled.object`
    width: 20px;
`;


const CountryLabel = styled.div`
    font-weight: 400;
    font-size: 0.6rem;
`;

const Country = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
`;

export class travel extends Component {
  render() {
    return (
      <Layout>
        <Category>Travel
          {/* <Countries>
                        <Country>
                            <Map data={japanFlag} />
                            <CountryLabel>Japan</CountryLabel>
                        </Country>
                        <Country>
                            <Map data={japanFlag} />
                            <CountryLabel>Japan</CountryLabel>
                        </Country>

                    </Countries> */}


        </Category>
        <ArticlesContainer>

          <Articles>
            {this.props.data.allPrismicTravel.edges.map(({node}) => (
              <Article to={node.uid}>
                <TravelCard country={node.data.country.text} city={node.data.city.text} date={node.data.date} cover={node.data.cover.fluid.src} season={node.data.season.text} title={node.data.title.text} />
              </Article>

            ))}

          </Articles>
        </ArticlesContainer>

      </Layout>
    );
  }
}

export default travel;


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
`;
