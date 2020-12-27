import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: #212121;
    width: 100%;
    height: 100%;

`;

const Cover = styled.img`
    object-fit: cover;
    width: 60%;
    padding: 10px;
   

`;


const Header = styled(motion.div)`
    font-size: 1.4rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes.desktop_header};

    }
    
`;

const Description = styled.div`
    font-size: 0.8rem;
    color: #B9B9B9;
    margin: 10px 0px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

`;

const Details = styled.div`
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
            <Header animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.4 }}>{this.props.skillTitle}</Header>
            <Description>{this.props.skillDescription}</Description>
          </div>
          <Button>Learn More</Button>
        </Details>
      </Container>
    );
  }
}

export default GeneralCard;
