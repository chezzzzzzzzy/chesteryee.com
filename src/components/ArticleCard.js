import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Description,
  Title,
  FeatureDescription,
  Subtitle,
  Category,
  Date,
  Name,
  Header,
  Pointer,
  Dot,
  Portrait,
  MarginWrapper,
  HR,
  Icon
} from '../components/Collection'

import icon_bookmark from '../assets/icon_bookmark.svg'

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.focus ? 'column' : 'column'};
  justify-content: space-between;
  height: 100%;
  color: white;
  /* padding: 40px; */
  background-color: #151515;
  border-radius: 16px;

  @media (min-width: 768px) {
    flex-direction: ${props => props.focus ? 'row' : 'column'};
    justify-content: flex-start;
    grid-gap: ${props => props.focus ? '80px' : null};

  }


`

const Cover = styled.img`
  width: 100%;
  border-radius: 4px;
  height: ${props => props.height ? `${props.height}` : '160px'};
  object-fit: cover;


  @media (min-width: 768px) {
    /* display: none; */
    width: ${props => props.width ? `${props.width}` : '100%'};

  }
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.8rem;
  justify-content: space-between;



`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  
  /* margin-top: 16px; */
  padding: 40px;


`

const Top = styled.div`
  

`

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;

`


const Divider = styled.div`
  margin-top: 16px;
`


export class ArticleCard extends Component {
  render() {
    return (
      <Container focus={this.props.focus}>

        {/* <Cover src={this.props.cover} height={this.props.height} width={this.props.width} /> */}

        <Detail>
          <Top>
            <Category>{this.props.category}</Category>
            <Subtitle>{this.props.title}</Subtitle>
            <MarginWrapper margin='8px 0px'>
              <Description active>{this.props.description}</Description>
            </MarginWrapper>
          </Top>

          <Divider>
            <HR></HR>
            <Profile>
              <ProfileDetails>
                <Portrait src={this.props.portrait}></Portrait>
                <div>
                  <Name>{this.props.name}</Name>
                  <Date>{this.props.date}</Date>
                </div>
              </ProfileDetails>
              <Icon data={icon_bookmark} />
            </Profile>
          </Divider>


        </Detail>


      </Container>
    )
  }
}

export default ArticleCard
