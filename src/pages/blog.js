import React, { Component, useRef, useState } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ArticleCard from '../components/ArticleCard'

import styled from 'styled-components'
import {
  Mega,
  Title,
  Subject,
  FeaturePointer,
  Box,
  BoxNew,
  HR,
  Description,
  Button,
  ButtonNav,
  MovingIcon,
  Icon,
} from '../components/Collection'
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

import LatestArticleCard from '../components/LatestArticleCard'

import StoriesCard from '../components/StoriesCard'
import MoreStoriesCard from '../components/MoreStoriesCard'

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto 4rem;
  }
`

const Container = styled.div`
  margin: 100px 0px;
  padding: 0 1.4rem;

  @media (${props => props.theme.mediaQueries.laptop}) {
    padding: 0px 100px;
  }
`

const Container2 = styled.div`
  margin: 100px 0px;
  padding: 0;
  
  @media (${props => props.theme.mediaQueries.laptop}) {
    padding: 0px 100px;
  }
`

const Inner = styled.div`
  margin: auto;
  max-width: 1260px;
`

const Article = styled(Link)`
  text-decoration: none;
  color: black;
  scroll-snap-align: center;
  grid-column: ${props => props.spanCol};
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
  grid-gap: 32px;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Articles4 = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 6fr);
    grid-gap: 16px;
    margin: 0 auto;
  }
`

const Articles3 = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  margin: 16px 0px;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
  }
`

const HC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`



const Tag = styled.div`
padding: 8px 18px;
background-color: #0077ff15;
border-radius: 10px;
font-weight: 500;
font-size: 0.8rem;
color: #07f;

@media (min-width: 768px) {
  padding: 12px 24px;
  font-size: 0.85rem;


}
`

const Tags = styled.div`
display: flex;
grid-gap: 1rem;
padding: 1rem 0;
flex-wrap: wrap;
`
// export class articles extends Component {
export const articles = props => {
  // constructor(props) {
  //   super(props)
  //   this.navRef = React.createRef()
  // }

  // handleNav = (direction) => {
  //   if (direction == 'left') {
  //     this.navRef ? (this.navRef.current.scrollBy({
  //       left: -200,
  //       behavior: 'smooth'
  //     })) : null
  //   } else {
  //     this.navRef ? (this.navRef.current.scrollBy({
  //       left: 200,
  //       behavior: 'smooth'
  //     })) : null
  //   }
  // }

  const tags = ['All', 'Data Structures', 'Algorithms', 'Configuration']

  const [tag, setTag] = useState('All')
  const [posts, setposts] = useState([]);




    return (
      <Layout>
        <Container2 style={{ maxWidth: '1200px', margin: '0px auto' }}>
          {props.data.allPrismicBlogPost.edges.map(({ node }, index) => {
            if (index < 1) {
              return (
                <Article to={node.uid}>
                  <LatestArticleCard
                    lm
                    latestArticle
                    m="0px 0px 0px 24px"
                    height="455px"
                    width="60%"
                    cover={node.data.cover.fluid.src}
                    title={node.data.title.text}
                    description={node.data.subtitle.text}
                    portrait={cover_profile}
                    name="Chester Yee"
                    date={node.data.date}
                  />
                </Article>
              )
            }
          })}
        </Container2>
        <Container style={{ maxWidth: '1200px', margin: '0px auto' }}>
          {/* <Article to={props.data.prismicBlogPost.uid}>

          <LatestArticleCard
            lm
            latestArticle
            m='0px 0px 0px 24px'
            height='450px'
            width='60%'
            tags={props.data.prismicBlogPost.tags}
            category={props.data.prismicBlogPost.data.category}
            cover={props.data.prismicBlogPost.data.cover.fluid.src}
            title={props.data.prismicBlogPost.data.title.text}
            description={props.data.prismicBlogPost.data.subtitle.text}
            portrait={cover_profile}
            name="Chester Yee"
            date={props.data.prismicBlogPost.data.date} />

        </Article> */}

          <Box margin="48px 0px 24px 0px">
            <Title>Latest Reads</Title>
          </Box>

          {/* <BoxNew color="#fff" bg="tomato">
            Tomato
          </BoxNew> */}

          <Articles>
            {props.data.allPrismicBlogPost.edges.map(({ node }, index) => {
              if (index > 0 && index < 8) {
                return (
                  <Article
                    to={node.uid}
                    spanCol={
                      (index == 1) | (index == 2) | (index == 3)
                        ? 'span 4'
                        : 'span 3'
                    }
                  >
                    <ArticleCard
                      mt
                      rev={(index == 1) | (index == 2) | (index == 3)}
                      height={
                        (index == 1) | (index == 2) | (index == 3)
                          ? null
                          : '160px'
                      }
                      tags={node.tags}
                      category={node.data.category}
                      cover={node.data.cover.fluid.src}
                      title={node.data.title.text}
                      description={
                        (index == 1) | (index == 2) | (index == 3)
                          ? node.data.subtitle.text
                          : null
                      }
                      portrait={cover_profile}
                      name="Chester Yee"
                      date={node.data.date}
                    />
                  </Article>
                )
              }
            })}
          </Articles>
        </Container>

        {/* <Container style={{ backgroundColor: 'black', margin: '0px auto', paddingTop: '4rem', paddingBottom: '2rem' }}>

          <HC style={{ maxWidth: '1200px', margin: '0px auto' }}>
            <Title style={{ color: 'white' }}>Featured Reads</Title>
            <HC>
              <ButtonNav onClick={() => this.handleNav('left')}><Icon data={icon_backward} /></ButtonNav>
              <ButtonNav onClick={() => this.handleNav('right')} style={{ marginLeft: '6px' }}><Icon data={icon_forward} /></ButtonNav>
            </HC>

          </HC>



          <div style={{ maxWidth: '1200px', margin: '0px auto 80px' }}>

            <Articles3 ref={this.navRef}>
              {props.data.allPrismicBlogPost.edges.map(({ node }) => (
                <Article to={node.uid}>
                  <StoriesCard

                    cover={node.data.cover.fluid.src}
                    title={node.data.title.text}
                    date={node.data.date}
                  />
                </Article>
              ))}

            </Articles3>
          </div>



        </Container> */}

        <Container style={{ maxWidth: '1200px', margin: '0px auto 80px' }}>

          <Box margin="48px 0px 24px 0px">
            <Title>More Reads</Title>

            <Tags>
              {tags.map(t => {
                return <Tag onClick={() => setTag(t)} >{t}</Tag>
              })}
            </Tags>

          </Box>




          <Articles2>
            {props.data.allPrismicBlogPost.edges.map(({ node }, index) => {
              if (index > 7 && tag == 'All') {
                return (
                  <Article to={node.uid}>
                    <MoreStoriesCard
                      cover={node.data.cover.fluid.src}
                      title={node.data.title.text}
                      tags={node.tags}
                      date={node.data.date}
                    />
                  </Article>
                )
              }
              if (index > 7 && tag == node.tags) {
                return (
                  <Article to={node.uid}>
                    <MoreStoriesCard
                      cover={node.data.cover.fluid.src}
                      title={node.data.title.text}
                      tags={node.tags}
                      date={node.data.date}
                    />
                  </Article>
                )
              }
            })}
          </Articles2>
        </Container>
      </Layout>
    )
  }

  export default articles

  export const query = graphql`
  query {
    prismicBlogPost {
      data {
        cover {
          url
        }
        date(formatString: "MMMM D, YYYY")
        subtitle {
          text
        }
        title {
          text
        }
        cover {
          url
          fluid {
            src
          }
        }
        body {
          ... on PrismicBlogPostBodyCodeSlice {
            id
            primary {
              snippet {
                html
                raw
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyContentSlice {
            id
            slice_type
            primary {
              description {
                html
                raw
                text
              }
            }
          }
        }
      }
      uid
      url
      tags
    }

    allPrismicBlogPost(sort: { order: DESC, fields: data___date }) {
      edges {
        node {
          data {
            body {
              ... on PrismicBlogPostBodyCodeSlice {
                id
                primary {
                  snippet {
                    text
                    html
                  }
                }
                slice_type
              }
              ... on PrismicBlogPostBodyContentSlice {
                id
                primary {
                  description {
                    html
                    text
                  }
                }
                slice_type
              }
            }
            cover {
              url(imgixParams: { q: 80 })
              fluid {
                src
              }
            }
            subtitle {
              text
            }
            date(formatString: "MMMM D, YYYY")

            title {
              text
            }
          }
          id
          url
          uid
          tags
        }
      }
    }
  }
`
