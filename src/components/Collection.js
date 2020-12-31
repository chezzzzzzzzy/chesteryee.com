import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding.mobile};
  height: 100%;

  @media screen and (min-width: 768px) {
    /* padding: ${props => props.theme.padding.desktop}; */
  }
`

export const Section = styled.div`
  margin: 20px 0px;

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.padding.desktop};
  }
`

export const Mega = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_mega};
  font-weight: bold;

  @media (${props => props.theme.mediaQueries.laptop}) {
    font-size: ${props => props.theme.fontSizes.desktop_mega};
  }
`

export const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_title};
  font-weight: bold;
  padding: 0.4px 0px;
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_title};
    padding: ${props => props.padding};

  }
`

export const Header = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_header};
  font-weight: bold;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_header};
  }
`

export const Subtitle = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_subtitle};
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_subtitle};
  }
`

export const Pointer = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  font-weight: bold;
  color: #585858;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

export const Description = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_description};
  /* padding: 0.6rem 0; */
  line-height: 1.4;
  color: ${props => (props.active ? props.theme.colors.textGrey : 'white')};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_description};
  }
`

export const Subject = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.4rem;
  background-color: #151515;

  @media screen and (min-width: 768px) {
    padding: 0.6rem 14%;
    font-size: 1.6rem;
  }
`

export const Cover = styled.object`
  width: 100%;
`

export const ArticleTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
`

export const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

export const IconLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px;
`

export const Icon = styled.object`
  color: white;
  filter: invert(100%);
  width: 20px;
  height: 20px;
`

export const Label = styled.div`
  color: ${props => props.theme.colors.textGrey};
  font-size: 0.8rem;
  margin-left: 8px;
`

export const Name = styled.div`
  font-size: 0.6rem;
  font-weight: bold;
  color: #b9b9b9;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Portrait = styled.img`
  border-radius: 100px;
  width: 12%;
  height: 12%;
  margin-right: 10px;

  @media (min-width: 768px) {
    display: ${props => (props.hide ? 'none' : 'inline')};
    width: 3%;
    height: 3%;
  }
`

export const Category = styled.div`
  display: none;
  color: ${props => props.theme.colors.accent};
  font-weight: 500;

  @media (min-width: 768px) {
    display: inline;
    font-size: 0.8rem;
    padding: ${props => props.padding};
  }
`

export const Wrapper = styled.div`
  margin: 30px 0px;
`
