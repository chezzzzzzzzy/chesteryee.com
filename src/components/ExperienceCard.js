import React, {Component} from "react";
import styled from "styled-components";


const Container = styled.div`
    margin: 16px 0px;
`;

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;

`;

const Description = styled.div`
    font-size: 0.8rem;
    margin: 4px 0px;
    
`;
const Timeframe = styled.div`
    font-size: 0.8rem;
    color: #585858;
    font-weight: 500;

`;


export class ExperienceCard extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.entity}</Title>
        <Description>{this.props.description}</Description>
        <Timeframe>{this.props.timeframe}</Timeframe>
      </Container>
    );
  }
}

export default ExperienceCard;
