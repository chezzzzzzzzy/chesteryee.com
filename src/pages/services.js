import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ServiceCard from '../components/ServiceCard'
import { motion } from "framer-motion";
import { Container, Subject } from '../components/Collection'

// assets
import icon_laptop from '../assets/laptop-outline.svg'
import icon_hammer from '../assets/hammer-outline.svg'
import icon_expand from '../assets/expand-outline.svg'
import icon_shapes from '../assets/shapes-outline.svg'


const Inner = styled.div`
    margin: auto;
    max-width: 1260px;
`

const Cards = styled(motion.ul)`
    display: grid;
    grid-gap: 1rem;
    padding: 2rem 0;

    @media (${props => props.theme.mediaQueries.laptop}) {
        grid-template-columns: 1fr 1fr;
    }


`

const Card = styled(motion.li)`
`


const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
}

const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -30 },
}
export class services extends Component {
    render() {
        return (
            <Layout>
                <Subject><Inner>Services</Inner></Subject>
                <Container>
                    <Cards
                        initial="hidden"
                        animate="visible"
                        variants={list}
                    >
                        <Card variants={item}><ServiceCard featureIcon={icon_laptop} featureTitle='WEB DESIGN ( UI / UX )' featureDescription='My core business is designing pixel perfect websites and interfaces.' /></Card>
                        <Card variants={item}><ServiceCard featureIcon={icon_hammer} featureTitle='WEB DEVELOPMENT' featureDescription='I build quality products that you would use.' /></Card>
                        <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='PROTOTYPING' featureDescription='I use high fidelity prototypes to learn how your website interacts.' /></Card>
                        <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='ILLUSTRATION' featureDescription='In addition to UI/UX, I also make illustrations and animations.' /></Card>
                    </Cards>
                </Container>
            </Layout>
        )
    }
}

export default services
