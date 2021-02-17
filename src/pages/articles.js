import React, { Component, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ArticleCard from '../components/ArticleCard'

import styled from 'styled-components'
import { Mega, Title, Subject, FeaturePointer, MarginWrapper, HR, Description, Pointer } from '../components/Collection'
import CategoryCard from '../components/CategoryCard'
import icon_laptop from '../assets/laptop-outline.svg'
import icon_codeSlash from '../assets/icon_codeSlash.svg'
import icon_server from '../assets/icon_server.svg'
import icon_chip from '../assets/icon_chip.svg'
import icon_wifi from '../assets/icon_wifi.svg'
import icon_data from '../assets/icon_data.svg'
import Banner from '../components/Banner'

const Articles = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    width: 1260px;
    margin: 0 auto;    
  }
`

const Container = styled.div`
  padding: 4rem 1.4rem;
  max-width: 1260px;
  margin: auto;    
`


const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`


const Article = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 8px 0px;
`
const LatestArticle = styled.div`

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
    border-radius: 16px;
    background-image: url('https://images.unsplash.com/photo-1543053976-5fd9336b6de0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80');
  }
`

const CategoryCards = styled.div`
 


  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(6, 140px);
  padding: 16px 0px;
  overflow-x: auto;


  ::-webkit-scrollbar {
    display: none;
  }


`

export class articles extends Component {
  render() {
    return (
      <Layout>
        <Subject><Inner>Code</Inner></Subject>

        <Container>
          <MarginWrapper margin='30px 0px'>
            <Title>Articles</Title>
            <Description>Posts, tutorials, snippets, musings, and everything else.</Description>
          </MarginWrapper>



          <LatestArticle>

            <Article to={this.props.data.prismicArticle.uid}>

              <ArticleCard
                focus
                width='100px'
                height='300px'
                category={this.props.data.prismicArticle.data.category}
                // cover={this.props.data.prismicArticle.data.cover.fluid.src}
                title={this.props.data.prismicArticle.data.title.text}
                description={this.props.data.prismicArticle.data.description.text}
                portrait={
                  'https://media-exp1.licdn.com/dms/image/C5603AQH7Hr4lav5A4A/profile-displayphoto-shrink_400_400/0/1607911342354?e=1614211200&v=beta&t=c_MO7Nt7aseitV5f-Bq7WPb3HouV-xMAFxfrr3j-q_Q'
                }
                name="Chester Yee"
                date={this.props.data.prismicArticle.data.date}
              />
            </Article>



          </LatestArticle>


          <MarginWrapper margin='24px 0px'>
            <FeaturePointer>CATEGORIES</FeaturePointer>
            <CategoryCards>
              <CategoryCard icon={icon_laptop} label='Workflow' />
              <CategoryCard icon={icon_codeSlash} label='Web' />
              <CategoryCard icon={icon_server} label='Database' />
              <CategoryCard icon={icon_chip} label='AI' />
              <CategoryCard icon={icon_wifi} label='Networks' />
              <CategoryCard icon={icon_data} label='Data' />

            </CategoryCards>
          </MarginWrapper>



          <MarginWrapper margin='24px 0px'>
            <MarginWrapper margin='4px 0px'>
              <Title>Latest Reads</Title>
            </MarginWrapper>
            {/* <HR></HR> */}
          </MarginWrapper>




          <Articles>
            {this.props.data.allPrismicArticle.edges.map(({ node }) => (
              <Article to={node.uid}>
                <ArticleCard

                  category={node.data.category}
                  // cover={node.data.cover.fluid.src}
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

        </Container>
        <Banner title='Article Suggestion' />

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

    prismicArticle {
      uid

    data {
      title {
        text
      }
      description {
        text
      }
      date(formatString: "Do MMMM YYYY")
      cover {
        fluid {
          src
        }
      }
      content {
        text
      }
      category
    }
  }

    allPrismicArticle(skip: 1) {
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
