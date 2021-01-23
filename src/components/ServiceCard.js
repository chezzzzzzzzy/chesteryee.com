import React, { Component } from 'react'
import styled from 'styled-components'
import { FeatureDescription, Header, FeaturePointer, Title, FeatureIcon, MarginWrapper } from '../components/Collection'
import { motion } from 'framer-motion';

const Container = styled.div`
`

const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #242424;
    border-radius: 6px;
`

export class ServiceCard extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <FeatureIcon data={this.props.featureIcon} />
                    <MarginWrapper margin='16px 0px'>
                        <FeaturePointer>{this.props.featureTitle}</FeaturePointer>
                    </MarginWrapper>
                    <FeatureDescription>{this.props.featureDescription}</FeatureDescription>
                </Card>
            </Container>
        )
    }
}

export default ServiceCard
