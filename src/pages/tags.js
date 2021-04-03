import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import {
    Subject,
    Container,
    Category,
    MarginWrapper
} from '../components/Collection'

const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`

const Tag = styled(Link)`
  text-decoration: none;
  color: grey;

`

const tags = ({ data: { allPrismicArticle: { group } } }) => {
    return (
        <Layout>
            <Subject><Inner>Tags</Inner></Subject>
            <Container>
                <MarginWrapper margin='20px 0px'>
                    {group.map(tag => (
                        <Tag key={tag.fieldValue} to={`/tags/${tag.fieldValue}/`}>
                            <div>
                                {tag.totalCount} posts with tagged with <Category>{tag.fieldValue}</Category>
                            </div>
                        </Tag>
                    ))}
                </MarginWrapper>
            </Container>
        </Layout>
    )
}

export default tags


export const pageQuery = graphql`
  query {
    allPrismicArticle {
        group(field: tags) {
            fieldValue
            field
            totalCount
        }
    }
  }
`