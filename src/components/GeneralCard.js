import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #212121;
    width: 100%;


`;

const Cover = styled.img`
    object-fit: cover;
    width: 60%;
    padding: 10px;
   

`;


const Title = styled(motion.div)`
    font-size: 1.4rem;
    font-weight: 600;
    
`;

const Description = styled.div`
    font-size: 0.8rem;
    color: #B9B9B9;
    margin: 6px 0px;

`;

const Details = styled.div`
    height: 160px;
    position: relative;
    bottom: 0px;
    text-align: center;
    margin: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const Button = styled.div`
    border-radius: 100px;
    background-color: #151515;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 12px 24px;
    margin-top: 10px;
    width: 30%;
`;

export class GeneralCard extends Component {
  render() {
    return (
      <Container>
        <Cover src={this.props.skillCover} />
        <Details>
          <div>
            <Title animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2 }}>{this.props.skillTitle}</Title>
            <Description>{this.props.skillDescription}</Description>
          </div>
          <Button>Learn More</Button>
        </Details>
      </Container>
    );
  }
}

export default GeneralCard;
