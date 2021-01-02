import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ServiceCard from '../components/ServiceCard'
import { motion } from "framer-motion";
import { Container } from '../components/Collection'

// assets
import icon_laptop from '../assets/laptop-outline.svg'
import icon_hammer from '../assets/hammer-outline.svg'
import icon_expand from '../assets/expand-outline.svg'
import icon_shapes from '../assets/shapes-outline.svg'

const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;

  @media screen and (min-width: 768px) {
    padding: 0.6rem 14%;
    font-size: 1.6rem;
  }
`


const Cards = styled(motion.ul)`
    display: grid;
    grid-gap: 1rem;

    @media (${props => props.theme.mediaQueries.laptop}) {
        grid-template-columns: 1fr 1fr;
    }


`

const Card = styled(motion.li)`
`

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}



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
                <Category>Services</Category>

                <Container>

                    <Cards
                        initial="hidden"
                        animate="visible"
                        variants={list}
                    >
                        <Card variants={item}><ServiceCard featureIcon={icon_laptop} featureTitle='WEB DESIGN ( UI / UX )' featureDescription='My core business is designing pixel perfect websites and interfaces.' /></Card>
                        <Card variants={item}><ServiceCard featureIcon={icon_hammer} featureTitle='WEB DEVELOPMENT' featureDescription='Whether its a Telegram bot that constantly reminds you to wear a mask before you step out of your apartment or hooking up a backend service to manage your workflow, I enjoy building quality products that allows you to spend time doing what you love most.' /></Card>
                        <Card variants={item}><ServiceCard featureIcon={icon_expand} featureTitle='PROTOTYPING' featureDescription='I use high fidelity prototypes to learn how your website interacts.' /></Card>
                        <Card variants={item}><ServiceCard featureIcon={icon_shapes} featureTitle='ILLUSTRATION' featureDescription='In addition to UI/UX, I also make illustrations and animations.' /></Card>
                    </Cards>
                </Container>
            </Layout>
        )
    }
}

export default services
