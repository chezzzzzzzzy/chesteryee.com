import React from 'react'
import styled from 'styled-components'
import {
    Mega,
    Title,
    Pointer,
    Description,
    Cover,
    Section,

    Button,
    MarginWrapper,
    FeaturePointer,
    CenterWrapper
} from '../components/Collection'
import cover_jump from '../assets/cover_jump.png'


const Container = styled.div`
`


const Banner = styled.div`
    padding: 60px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;

`


const CollaborateBanner = () => {
    return (
        <Container>
            <Section center black>
                <Banner>
                    <FeaturePointer>SAY HELLO 👋🏻</FeaturePointer>
                    <Title>Let's Collaborate!</Title>
                    <Cover data={cover_jump} />
                    <Button>Get in Touch</Button>
                </Banner>
            </Section>
        </Container>
    )
}

export default CollaborateBanner
