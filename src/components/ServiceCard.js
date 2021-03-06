import React, { Component } from 'react'
import styled from 'styled-components'
import { FeatureDescription, Header, FeaturePointer, Title, FeatureIcon, Box, Description } from '../components/Collection'
import { motion } from 'framer-motion';

import FeatureCard from '../components/FeatureCard'

const Container = styled.div`
    height: 100%;

`

const Card = styled(motion.div)`
    display: flex;
    justify-items: space-between;
    flex-direction: column;
    /* background-color: #f9f9f9; */

    @media (${props => props.theme.mediaQueries.laptop}) {
    }
   
`

const ServiceTitle = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: black;
    
    @media (${props => props.theme.mediaQueries.laptop}) {
        font-size: 1.4rem;
        padding-right: 3rem;
        min-height: 4rem;
    }

`



const ServiceCTA = styled.a`
    text-decoration: none;
    color: #609AFF;
    font-weight: 500;
    font-size: 0.8rem;

`

export class ServiceCard extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <div>

                        <FeatureIcon data={this.props.featureIcon} />
                        <Box margin='16px 0px 8px'>
                            <ServiceTitle>{this.props.featureTitle}</ServiceTitle>
                        </Box>
                        <Description>{this.props.featureDescription}</Description>
                    </div>



                </Card>
            </Container>
        )
    }
}

export default ServiceCard
