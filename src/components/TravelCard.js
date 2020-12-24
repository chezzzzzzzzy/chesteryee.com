import React, { Component } from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    color: white;
    position: relative;
    width: 100%;
    /* margin-bottom: 16px; */


`
const Title = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
   

`

const Subtitle = styled.div`
    font-size: 0.8rem;
    font-weight: 300;
`


const Description = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
`

const Cover = styled.img`
    object-fit: cover;
    height: 100%;
`


const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

  

`

const Location = styled.div`
    z-index: 100;
`

const Date = styled.div`

`
const Details = styled.div`
    position: absolute;
    top: 4%;
    left: 6%;
    right: 6%;
`


export class TravelCard extends Component {
    render() {
        return (
            <Container>
                <Cover src={this.props.cover} />
                <Details>
                    <Info>
                        <Location>
                            <Title>{this.props.city}</Title>
                            <Subtitle>{this.props.country}</Subtitle>
                        </Location>

                        <Description>{this.props.date}</Description>
                    </Info>
                </Details>
            </Container>
        )
    }
}

export default TravelCard
