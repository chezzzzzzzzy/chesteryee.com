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
    /* background-color: #f3f3f3; */
    margin: 2rem auto 4rem;
    max-width: 1200px;
    padding: 0 1.4rem;
`


const BannerContainer = styled.div`
    padding: 40px 0px;
    display: flex;
    width: 100%;

    align-items: center;
    flex-direction: column;
    background-color: #f7f7f7;
    border-radius: 8px;

`


const Banner = ({ title }) => {
    return (
        <Container>
            <Section center>
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
