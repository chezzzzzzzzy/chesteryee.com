import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import styled from 'styled-components'

const Container = styled.div``

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.8rem 0;
`

const Subtitle = styled.div``
const Description = styled.div`
  font-size: 0.9rem;
`

const Cover = styled.img``

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 0;
`

const Portrait = styled.img`
  border-radius: 100px;
  background-color: pink;
  width: 10%;
  height: 10%;
  margin-right: 10px;
`

const Name = styled.div`
  font-size: 0.6rem;
`

const Date = styled.div`
  font-size: 0.4rem;
`

const Category = styled.div`
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 0;
  background-color: #000;
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Category>Software Enginering</Category>
      <Container>
        <Description>{post.frontmatter.date}</Description>
        <Title>{post.frontmatter.title}</Title>
        <Profile>
          <Portrait></Portrait>
          <div>
            <Name>Chester Yee</Name>
            <Date>Aspiring Software Engineer</Date>
          </div>
        </Profile>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
