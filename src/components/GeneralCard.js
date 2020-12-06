import React, { Component } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const Container = styled.div`
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 40px 0px;
    flex: 0 0 auto;
    margin-right: 20px;
    background-color: #212121;
    /* box-shadow: 0px 20px 100px 10px black;   */
    


`

const Cover = styled.object`
    object-fit: cover;
    /* position: absolute; */
    /* top: 15px; */
    /* right: -22px; */
    /* width: 200px; */
    width: 50%;
   

`




const Title = styled(motion.div)`
    font-size: 1.2rem;
    font-weight: bold;
    
`

const Description = styled.div`
    font-size: 0.8rem;
    color: #B9B9B9;
    margin: 6px 40px;

`

const Overlay = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
    margin: 0 auto 68px;
    border-radius: 50%;
    font-size: 0;
    background-color: ${props => props.color};

    transition: all .3s;

    &:hover {
        transform: scale(1.2);
    }

`

const Button = styled.div`
    border-radius: 100px;
    background-color: #151515;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 12px 32px;
    margin-top: 10px;
`

export class GeneralCard extends Component {
    render() {
        return (
            <Container>

                {/* <Overlay color={this.props.color}> */}
                <Cover data={this.props.skillCover} />
                {/* </Overlay> */}
                <Title animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2 }}>{this.props.skillTitle}</Title>
                <Description>{this.props.skillDescription}</Description>
                <Button>Learn More</Button>
            </Container>
        )
    }
}

export default GeneralCard
