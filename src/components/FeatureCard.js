import React from 'react'
import styled from 'styled-components'
import cover_illustration from '../assets/cover_illustration.png'
import cover_design from '../assets/cover_design.png'
import cover_develop from '../assets/cover_develop.png'
import { Box } from '../components/Collection'

const Container = styled.div`
    height: 100%;

`

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    grid-gap: 6rem;
    margin: 1rem 0px;
`

const FeatureCover = styled.object`
    width: 100%;
`

const CoverContainer = styled.div`
    background-color: #242424;
    border-radius: 8px;
    padding: 2rem;

`

const FeatureTitle = styled.div`
    font-size: 2rem;
    font-weight: 600;

`

const FeatureDescription = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    color: #9e9e9e;

`

const InforContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FeatureCard = () => {
    return (
        <Container>
            <Card>
                <CoverContainer>
                    <FeatureCover data={cover_develop} />
                </CoverContainer>
                <InforContainer>
                    <FeatureTitle>Illustration</FeatureTitle>
                    <Box margin='1rem 0px'>
                        <FeatureDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</FeatureDescription>
                    </Box>
                </InforContainer>
            </Card>
        </Container>
    )
}

export default FeatureCard
