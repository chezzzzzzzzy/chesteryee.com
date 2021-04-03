import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Description,
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

import icon_bookmark from '../assets/icon_bookmark2.svg'
import icon_calendar from '../assets/icon_calendar2.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: white;
  

  @media (min-width: 768px) {
    flex-direction: ${props => props.focus ? 'row' : 'column'};
    grid-gap: ${props => props.focus ? '60px' : null};
    /* border: ${props => props.focus ? '0.6px solid #292929' : null}; */
  }


`

const Cover = styled.img`
  width: 100%;
  border-radius: 4px;
  height: ${props => props.height ? `${props.height}` : '240px'};
  object-fit: cover;


  @media (min-width: 768px) {
    /* display: none; */
    width: ${props => props.width ? `${props.width}` : '100%'};

  }
`

const Content = styled.div`
  width: 100%;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentHead = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.mt ? '16px' : '16px'};
  flex-basis: 50%;

  @media (min-width: 768px) {
    margin-top: ${props => props.mt ? null : '0px'};

  }
`

const ContentBody = styled.div`
  margin: 16px 0px;
  

`

const ContentFoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;



`

const Author = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  margin: 8px 0px;
  font-size: ${props => props.theme.fontSizes.mobile_subtitle};
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_subtitle};
  }
`

const BookmarkContainer = styled.div`

`

const Tags = styled.div`

`

const ContentTop = styled.div`
  @media (min-width: 768px) {
    padding: ${props => props.focus ? '20px 20px 0px 0px' : null};
  }

`

const ContentBottom = styled.div`

`

export class ArticleCard extends Component {


  render() {

    const x = this.props.tags
    return (
      <Container focus={this.props.focus}>

        <Cover src={this.props.cover} height={this.props.height} width={this.props.width} />

        <Content>
          <ContentTop>

            <ContentHead mt={this.props.mt}>
              <Author>{this.props.name}</Author>
              <DateContainer>
                <Icon size='14px' data={icon_calendar} />
                <Date style={{ marginLeft: '5px' }}>{this.props.date}</Date>
              </DateContainer>
            </ContentHead>

            <ContentBody>
              <Title>{this.props.title}</Title>
              <Description active>{this.props.description}</Description>
            </ContentBody>

          </ContentTop>

          <ContentBottom>
            <ContentFoot>
              <Tags>
                {
                  x && x.map(index => <Category>{index}</Category>)
                }
              </Tags>
              <BookmarkContainer>
                <Icon data={icon_bookmark} />
              </BookmarkContainer>
            </ContentFoot>
            <HR></HR>
          </ContentBottom>

        </Content>




      </Container>
    )
  }
}

export default ArticleCard





//   < Detail >
// <Top>
//   <Category>{this.props.category}</Category>
//   <Subtitle>{this.props.title}</Subtitle>
//   <MarginWrapper margin='8px 0px'>
//     <Description active>{this.props.description}</Description>
//   </MarginWrapper>
// </Top>

// <Divider>
//   {/* <HR></HR> */}
//   <Profile>
//     <ProfileDetails>
//       {/* <Portrait src={this.props.portrait}></Portrait> */}
//       <div>
//         <Name>{this.props.name}</Name>
//         <Date>{this.props.date}</Date>
//       </div>
//     </ProfileDetails>
//     <Icon data={icon_calendar} />
//   </Profile>
// </Divider>


// </Detail >