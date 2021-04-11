import React, { Component, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ArticleCard from '../components/ArticleCard'

import styled from 'styled-components'
import { Mega, Title, Subject, FeaturePointer, MarginWrapper, HR, Description, Button, ButtonNav, MovingIcon, Icon } from '../components/Collection'
import CategoryCard from '../components/CategoryCard'
import icon_laptop from '../assets/laptop-outline.svg'
import icon_codeSlash from '../assets/icon_codeSlash.svg'
import icon_server from '../assets/icon_server.svg'
import icon_chip from '../assets/icon_chip.svg'
import icon_wifi from '../assets/icon_wifi.svg'
import icon_data from '../assets/icon_data.svg'
import Banner from '../components/Banner'
import cover_profile from '../assets/cover_profile.jpeg'

import icon_forward from '../assets/icon_forward.svg'
import icon_backward from '../assets/icon_backward.svg'


const Articles = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    width: 1260px;
    margin: 0 auto;    
  }
`

const Container = styled.div`
  padding: 1rem 1.4rem;
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
  scroll-snap-align: center;

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

const Articles2 = styled.div`
  display: grid;
  grid-gap: 16px;

`

const Articles3 = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: 85%;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  margin: 16px 0px;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    grid-auto-columns: 32.5%;
  }



`

const HC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export class articles extends Component {

  constructor(props) {
    super(props)
    this.navRef = React.createRef()
  }


  handleNav = (direction) => {
    if (direction == 'left') {
      this.navRef ? (this.navRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      })) : null
    } else {
      this.navRef ? (this.navRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      })) : null
    }
  }

  render() {
    return (
      <Layout>
        <Subject><Inner>Code</Inner></Subject>

        <Container>




          <Article to={this.props.data.prismicArticle.uid}>

            <ArticleCard
              focus
              m='0px 0px 0px 24px'
              height='400px'
              width='50%'
              tags={this.props.data.prismicArticle.tags}
              category={this.props.data.prismicArticle.data.category}
              cover={this.props.data.prismicArticle.data.cover.fluid.src}
              title={this.props.data.prismicArticle.data.title.text}
              description={this.props.data.prismicArticle.data.description.text}
              portrait={cover_profile}
              name="Chester Yee"
              date={this.props.data.prismicArticle.data.date}
            />
          </Article>




          <MarginWrapper margin='24px 0px'>
            <Title>Latest Reads</Title>
          </MarginWrapper>




          <Articles>
            {this.props.data.allPrismicArticle.edges.map(({ node }) => (
              <Article to={node.uid}>
                <ArticleCard
                  mt
                  tags={node.tags}
                  category={node.data.category}
                  cover={node.data.cover.fluid.src}
                  title={node.data.title.text}
                  description={node.data.description.text}
                  portrait={cover_profile}
                  name="Chester Yee"
                  date={node.data.date}
                />
              </Article>
            ))}
          </Articles>


          <MarginWrapper margin='24px 0px'>
            <HC>
              <Title>Popular</Title>
              <Button href='./articles'>
                <HC>
                  <div style={{ marginRight: '4px' }}>Explore</div>
                  <MovingIcon size='16px' data={icon_forward}></MovingIcon>
                </HC>
              </Button>
            </HC>

          </MarginWrapper>

          <Articles2>


            <Article to={this.props.data.prismicArticle.uid}>

              <ArticleCard
                focus
                m='0px 0px 0px 24px'
                width='32%'

                tags={this.props.data.prismicArticle.tags}

                category={this.props.data.prismicArticle.data.category}
                cover={this.props.data.prismicArticle.data.cover.fluid.src}
                title={this.props.data.prismicArticle.data.title.text}
                description={this.props.data.prismicArticle.data.description.text}
                portrait={cover_profile}
                name="Chester Yee"
                date={this.props.data.prismicArticle.data.date}
              />
            </Article>




          </Articles2>

          <MarginWrapper margin='24px 0px'>
            <HC>
              <Title>You might also like</Title>
              <HC>
                <ButtonNav onClick={() => this.handleNav('left')}><Icon data={icon_backward} /></ButtonNav>
                <ButtonNav onClick={() => this.handleNav('right')} style={{ marginLeft: '6px' }}><Icon data={icon_forward} /></ButtonNav>
              </HC>

            </HC>

          </MarginWrapper>



          <Articles3 ref={this.navRef}>
            {this.props.data.allPrismicArticle.edges.map(({ node }) => (
              <Article to={node.uid}>
                <ArticleCard
                  mt
                  tags={node.tags}
                  category={node.data.category}
                  cover={node.data.cover.fluid.src}
                  title={node.data.title.text}
                  description={node.data.description.text}
                  portrait={cover_profile}
                  name="Chester Yee"
                  date={node.data.date}
                />
              </Article>
            ))}

          </Articles3>



        </Container>
        <Banner title='Article Suggestion' />

      </Layout >
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
            date(formatString: "DD MMMM, YY")
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
      tags
    data {
      
      title {
        text
      }
      description {
        text
      }
      date(formatString: "Do MMM YY")
      cover {
        fluid {
          src
        }
      }
     
     
      category
    }
  }

    allPrismicArticle(sort: {order: DESC, fields: data___date}) {
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
            date(formatString: "Do MMM YY")
            title {
              text
            }
            category
         
            description {
              text
            }
          }
          tags
        }
      }
    }





  }
`
