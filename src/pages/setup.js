import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {
    Subject
} from '../components/Collection'

import ProductCard from '../components/ProductCard'

import cover_u2720q from '../assets/u2720q.png'
import cover_onesl from '../assets/onesl.png'
import cover_saljan from '../assets/cover_saljan.png'
import cover_desk from '../assets/cover_desk.png'
import cover_mbp16 from '../assets/cover_mbp16.png'
import cover_opus from '../assets/cover_opus.png'
import cover_app from '../assets/cover_app.png'
import cover_ip12 from '../assets/cover_ip12.png'
import cover_aw6 from '../assets/cover_aw6.png'


const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`

const Products = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 1rem 1.4rem;
    max-width: 1260px;
    margin: auto; 
`

const setup = () => {
    return (
        <Layout>
            <Subject><Inner>Setup</Inner></Subject>
            <Products>

                <ProductCard cover={cover_onesl} name='One SL' brand='Sonos' />
                <ProductCard cover={cover_u2720q} name='U2720Q 4K USB C' brand='Dell' />
                <ProductCard cover={cover_saljan} name='Table' brand='IKEA' />
                <ProductCard cover={cover_desk} name='Standing Desk' brand='TiMOTION' />
                <ProductCard cover={cover_opus} name='Dual Monitor Arm' brand='PRISM+' />
                <ProductCard cover={cover_app} name='AirPods Pro' brand='Apple' />
                <ProductCard cover={cover_ip12} name='iPhone 12 Pro' brand='Apple' />
                <ProductCard cover={cover_aw6} name='Watch Series 6' brand='Apple' />
                <ProductCard cover={cover_mbp16} name="16' MacBook Pro" brand='Apple' />
            </Products>
        </Layout>
    )
}

export default setup
