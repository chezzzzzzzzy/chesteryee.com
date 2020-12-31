import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import error from '../assets/error.png'

import { Section, Mega, Cover, Description } from '../components/Collection'

const Details = styled.div`
  text-align: center;
`

export class Error extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <Details>
            <Cover data={error} />
            <Mega>404</Mega>
            <Description>Page Not Found</Description>
          </Details>
        </Section>
      </Layout>
    )
  }
}

export default Error
