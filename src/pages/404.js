import React, {Component} from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import error from "../assets/error.svg";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cover = styled.object`
    width: 80%;
`;

const Title = styled.div`
  font-size: 1.6em;
  font-weight: bold;

`;

const Subtitle = styled.div`
  font-size: 1.1em;
  padding: 0.6rem 0;
  color: ${(props) => props.active ? "white" : "#585858"};
  font-weight: 600;

`;

export class Error extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>404</Title>
          {/* <Cover data={error} /> */}
        </Container>
      </Layout>
    );
  }
}

export default Error;
