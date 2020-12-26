import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    color: white;
    padding-bottom: 20px;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 300px 3fr;
      grid-gap: 20px;
      padding: 30px 0px;
      
    }

`;

const Cover = styled.img`
    width: 100%;
    border-radius: 4px;
    height: 160px;
    object-fit: cover;

    @media (min-width: 768px) {
      display: none;
    }
    
`;

const Article = styled.div`

`;

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }

`;

const Subtitle = styled.div``;

const Description = styled.div`
    font-size: 0.8rem;
    color: #B9B9B9;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    

`;

const Portrait = styled.img`
    border-radius: 100px;
    background-color: pink;
    width: 10%;
    height: 10%;
    margin-right: 10px;


    @media (min-width: 768px) {
      display: none;
      
    }
`;

const Name = styled.div`
    font-size: 0.6rem;
    font-weight: bold;
    color: #B9B9B9;

    @media (min-width: 768px) {
      display: none;
    }
`;

const Date = styled.div`
    font-size: 0.4rem;
    color: #585858;

    @media (min-width: 768px) {
      font-size: 0.8rem
    }

`;

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.8rem 0;

    @media (min-width: 768px) {
      align-items: flex-start;
    }


`;

const Category = styled.div`
  
  display: none;
  color: #60A9FF;
  font-weight: 500;

  @media (min-width: 768px) {
    display: inline;
    font-size: 0.8rem;

  }
`


export class ArticleCard extends Component {
  render() {
    return (
      <Container>

        <Profile>

          <Portrait src={this.props.portrait}></Portrait>
          <div>
            {/* <Category>{this.props.category}</Category> */}
            <Name>{this.props.name}</Name>
            <Date>{this.props.date}</Date>
          </div>
        </Profile>

        <div>
          <Category>{this.props.category}</Category>
          <Cover src={this.props.cover} />
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </div>
      </Container>
    );
  }
}

export default ArticleCard;


