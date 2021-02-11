import React, { Component } from 'react'
import styled from 'styled-components'
import { Description, Header, Subtitle, Title, MarginWrapper, FeaturePointer } from './Collection'

const Container = styled.div`

`
const Card = styled.div`
    display: grid;
    background-color: #151515;
    border-radius: 8px;
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
                        <MarginWrapper margin='4px 0px'>
                            <FeaturePointer>FORMS</FeaturePointer>
                        </MarginWrapper>
                        <Subtitle>{this.props.title}</Subtitle>
                        <MarginWrapper margin='30px 0px'>
                            <Description>{this.props.description}</Description>
                        </MarginWrapper>

                    </Details>
                    <Cover src={this.props.cover} />

                </Card>
            </Container>
        )
    }
}

export default CardHalfCoverHalfText
