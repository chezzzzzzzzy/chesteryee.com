import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {
    Subject
} from '../components/Collection'

const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`


const setup = () => {
    return (
        <Layout>
            <Subject><Inner>Setup</Inner></Subject>
        </Layout>
    )
}

export default setup
