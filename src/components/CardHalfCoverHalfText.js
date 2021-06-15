import React, { Component } from 'react'
import styled from 'styled-components'
import { Description, Header, Subtitle, Title, Box, FeaturePointer } from './Collection'

const Container = styled.div`

`
const Card = styled.div`
    display: grid;
    background-color: #f7f7f7;
    border-radius: 6px;
    flex-direction: column;
    margin: 16px 0px;
    
    @media (${props => props.theme.mediaQueries.laptop}) {
        grid-template-columns: 1fr 1fr;
        flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')}
    }

`



const Cover = styled.img`
    max-width:100%;
    max-height:100%;
    object-fit: cover;
    

`

const Details = styled.div`
    padding: 40px;

`

export class CardHalfCoverHalfText extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <Details>
                        <Box margin='4px 0px'>
                            <FeaturePointer>FORMS</FeaturePointer>
                        </Box>
                        <Subtitle>{this.props.title}</Subtitle>
                        <Box margin='30px 0px'>
                            <Description>{this.props.description}</Description>
                        </Box>

                    </Details>
                    <Cover src={this.props.cover} />

                </Card>
            </Container>
        )
    }
}

export default CardHalfCoverHalfText
