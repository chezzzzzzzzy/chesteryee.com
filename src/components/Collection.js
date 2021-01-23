import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding ? '0px' : `${props.theme.padding.mobile}`};
  margin: 0px auto;

  @media (${props => props.theme.mediaQueries.laptop}) {
    max-width: ${props => props.width ? `${props.width}` : '1260px'};
    padding: 0px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : null};
  background-color: ${props => props.black ? '#151515' : 'null'};
  width: ${props => props.width ? `${props.width}` : '100%'};
  height: ${props => props.height ? '100vh' : null};

  @media (${props => props.theme.mediaQueries.laptop}) {
  }
`

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.black ? '#151515' : 'null'};
  align-items: ${props => props.center ? 'center' : null};
  
  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr;
    max-width: 1260px;
    margin: auto;

  }

`


export const Statistics = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_statistics};
  font-weight: bold;

  @media (${props => props.theme.mediaQueries.laptop}) {
    font-size: ${props => props.theme.fontSizes.desktop_statistics};
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
  font-weight: 500;
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
  font-weight: 600;
  color: #585858;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

export const Description = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_description};
  line-height: 1.6;
  color: ${props => (props.active ? props.theme.colors.textGrey : 'white')};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_description};
  }
`

export const Subject = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem 1.4rem;
  background-color: #151515;

  @media screen and (min-width: 768px) {
    padding: 0.8rem 0;
    font-size: 1rem;
  }
`

export const Cover = styled.object`
  width: 100%;
  max-width: 600px;
`

export const CoverBrands = styled.object`
  width: 100px;
  display: flex;
  justify-self: center;
  align-self: center;
  filter: opacity(0.5);
  transition: filter 0.5s;

  :hover {
    filter: opacity(1)
  }
;
`

export const ArticleTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
`



export const IconLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px;
`

export const Icon = styled.object`
  /* filter: invert(100%); */
  width: 20px;
  height: 20px;
`

export const FeatureIcon = styled.object`
    width: 46px;
    height: 46px;
`

export const FeatureControl = styled.object`
    width: 30px;
    height: 30px;
`


export const Label = styled.div`
  color: ${props => props.theme.colors.textGrey};
  font-size: 0.8rem;
  margin-left: 8px;
`

export const Name = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};  
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`


export const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

export const Dot = styled.div`
  margin: 0px 4px;
`


export const Portrait = styled.img`
  border-radius: 100px;
  width: 8%;
  height: 100%;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 10%;
  }


`

export const Category = styled.div`
  color: ${props => props.theme.colors.accent};
  font-weight: 500;
  border-radius: 1000px;
  background-color: #60A9FF10;
  padding: 6px 16px;
  font-size: 0.6rem;
  display: inline-block;
  margin-bottom: 8px;
 
`

// used for adjusting y margin
export const MarginWrapper = styled(motion.div)`
  margin: ${props => props.margin ? `${props.margin}` : 'null'};
  padding: ${props => props.padding ? `${props.padding}` : 'null'};

  @media (${props => props.theme.mediaQueries.laptop}) {
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
  }

`

export const PaddingWrapper = styled.div`
padding: ${props => props.padding ? `${props.padding}` : 'null'};

@media (${props => props.theme.mediaQueries.laptop}) {
  padding: ${props => props.padding ? `${props.padding}` : 'null'};
}

`

export const Wrapper = styled.div`
  margin: ${props => props.margin ? `${props.margin}` : null};
  padding: ${props => props.padding ? `${props.padding}` : null};
`


export const FeaturePointer = styled.div`
    font-size: ${props => props.theme.fontSizes.mobile_pointer};
    font-weight: 500;
    letter-spacing: 1px;
    color: #585858;

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.desktop_pointer};
    }
`

export const FeatureDescription = styled.div`
    font-size: ${props => props.theme.fontSizes.mobile_description};
    font-weight: 500;
    color: ${props => (props.active ? props.theme.colors.textGrey : 'white')};

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.desktop_description};
    }
`


export const FeatureSubtitle = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_subtitle};
  color: ${props => (props.active ? props.theme.colors.accent : 'white')};
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_subtitle};
  }
`


export const FooterTitle = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom:10px; 
`

export const FooterDescription = styled.div`
  font-size: 0.7rem;
  color: #b9b9b9;
  margin-bottom:4px; 

`

export const Button = styled.div`
    border-radius: 100px;
    background-color: #242424;
    padding: 10px 28px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: border 0.2s ease-in-out;
    font-size: 14px;

    :hover {
      border: 1px solid ${props => props.theme.colors.accent};

    }

    
`

export const CenterWrapper = styled.div`
  text-align: center;
`

export const HR = styled.hr`
  margin: 10px 0px;
  border: 0.6px solid ${props => props.theme.colors.textDarkGrey};
`