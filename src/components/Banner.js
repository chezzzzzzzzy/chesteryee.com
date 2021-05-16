import React from 'react'
import styled from 'styled-components'
import {
    Mega,
    Title,
    Pointer,
    Description,
    BannerCover,
    Section,

    Button,
    Box,
    FeaturePointer,
    CenterWrapper
} from './Collection'
import cover_jump from '../assets/cover_workTogether3.png'


const Container = styled.div`
`


const BannerContainer = styled.div`
    padding: 60px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;

`


const Banner = ({ title }) => {
    return (
        <Container>
            <Section center black>
                <BannerContainer>
                    <Box margin='8px 0px'>
                        <FeaturePointer>SAY HELLO 👋🏻</FeaturePointer>
                    </Box>
                    <Title>{title ? title : "Let's Collaborate!"}</Title>
                    <BannerCover data={cover_jump} />
                    <Button href='mailto: hello@chesteryee.com'>Get in Touch</Button>
                </BannerContainer>
            </Section>
        </Container>
    )
}

export default Banner
