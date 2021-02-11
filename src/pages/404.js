import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import cover_error from '../assets/cover_error.png'

import { Section, Statistics, Cover, Description, Pointer } from '../components/Collection'

const Details = styled.div`
  text-align: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`



export class Error extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <Details>
            <Pointer>ERROR</Pointer>
            <Statistics>404</Statistics>
            <Cover data={cover_error} />
          </Details>
        </Section>
      </Layout>
    )
  }
}

export default Error
