import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { space, layout, color } from 'styled-system'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.4rem;
  margin: 0px auto;

  @media (${props => props.theme.mediaQueries.laptop}) {
    max-width: ${props => props.width ? `${props.width}` : '100%'};
    padding: 0px 100px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'row' : 'column'};
  align-items: ${props => props.center ? 'center' : null};
  background-color: ${props => props.black ? '#151515' : 'null'};
  width: ${props => props.width ? `${props.width}` : '100%'};
  height: ${props => props.height ? '100vh' : null};

  @media (${props => props.theme.mediaQueries.laptop}) {
    justify-content: ${props => props.center ? 'center' : null};;
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
  color: black;

  @media (${props => props.theme.mediaQueries.laptop}) {
    font-size: ${props => props.theme.fontSizes.desktop_statistics};
  }
`
export const Mega = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_mega};
  font-weight: bold;
  color: black;

  @media (${props => props.theme.mediaQueries.laptop}) {
    font-size: ${props => props.theme.fontSizes.desktop_mega};
  }
`

export const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_title};
  font-weight: bold;
  padding: 0.4px 0px;
  color: ${props => (props.active ? props.theme.colors.accent : 'black')};

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
  color: black;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_subtitle};
  }
`

export const Pointer = styled.div`
  /* font-size: ${props => props.theme.fontSizes.mobile_pointer};
  font-weight: 600;
  color: #585858;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  } */

  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: ${props => props.theme.colors.textGrey};
  font-weight: 400;
  margin: 2px 0px;
  color: #585858;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

export const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  font-weight: 400;
  color: black;


  @media screen and (min-width: 768px) {
    font-size: 0.95rem;
  }
`

export const Description2 = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_description};
  line-height: 1.6;
  font-weight: 500;
  color: black;


  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_description};
  }
`


export const Text = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_description};
  line-height: 1.6;
  color: ${props => props.theme.colors.text};


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

  @media screen and (min-width: 768px) {
    max-width: 400px;

  }
`

export const BannerCover = styled.object`
  max-width: 500px;
  margin: 20px 0px;
  width: 80%;

  @media screen and (min-width: 768px) {
      width: 60%;
  }
`

export const CoverBrands = styled.object`
  height: 30px;
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
  width: ${props => props.size ? `${props.size}` : '20px'};
  height: ${props => props.size ? `${props.size}` : '20px'};
`

export const MovingIcon = styled.object`
  width: ${props => props.size ? `${props.size}` : '20px'};
  height: ${props => props.size ? `${props.size}` : '20px'};
  transition: transform 0.4s;
  
  :hover {
    transform: translateX(4px);
  }
`

export const FeatureIcon = styled.object`

  width: 36px;
  height: 36px;
  /* background-color: ${props => props.bg ? '#07f20' : 'null'};
  padding: ${props => props.pad ? '16px' : 'null'};
  border-radius: 16px;
   */

  @media (${props => props.theme.mediaQueries.laptop}) {
      width: 46px;
      height: 46px;
  }
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
  color: black;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`


export const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.mobile_pointer};
  color: black;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_pointer};
  }
`

export const Dot = styled.div`
  margin: 0px 4px;
  color: ${props => props.theme.colors.textDarkGrey};

`


export const Portrait = styled.img`
  border-radius: 8px;
  max-width: 40px;
  height: 100%;
  margin-right: 10px;




`

export const Tag = styled(Link)`
  text-decoration: none;
  color: #07f;

`

export const Category = styled.div`
  color: ${props => props.theme.colors.accent};
  font-weight: 500;
  border-radius: 1000px;
  background-color: #07f010;
  padding: 6px 16px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 8px;
 
`

export const Box = styled(motion.div)`
  margin: ${props => props.margin ? `${props.margin}` : 'null'};
  padding: ${props => props.padding ? `${props.padding}` : 'null'};
  width: ${props => props.width ? '100%' : 'null'};

  @media (${props => props.theme.mediaQueries.laptop}) {
    width: ${props => props.width ? `${props.width}` : 'null'};
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
    font-weight: 450;
    letter-spacing: 1px;
    color: gray;

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
  color: black;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.desktop_subtitle};
  }
`


export const FooterTitle = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom:16px;
  color: #1d1d1f;
`

export const FooterDescription = styled.div`
  font-size: 0.8rem;
  color: #3d3d4e;
  transition: 0.2s color ease-in-out;
  margin: 10px 0px;
  


`

export const Button = styled.a`
    border-radius: 100px;
    background-color: #07f;
    padding: 10px 28px;
    font-weight: 600;
    /* border: 1px solid ${props => props.theme.colors.accent}; */
    transition: background-color 0.1s ease-in-out;
    font-size: 14px;
    text-decoration: none;
    color: white;
    
  

    
`

export const ButtonNav = styled.a`
    border-radius: 100px;
    background-color: #242424;
    padding: 10px 12px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: border 0.2s ease-in-out;
    text-decoration: none;
    
    :hover {
      border: 1px solid ${props => props.theme.colors.accent};

    }

    
`


export const CenterWrapper = styled.div`
  text-align: center;
`

export const HR = styled.hr`
  margin: 0px 0px;
  border-radius: 100px;   
  border: 0.6px solid #e5e7eb;
`


export const H1 = styled.h1`
  font-size: 3.052rem;
`
export const H2 = styled.h2`
  font-size: 2.441rem;
`
export const H3 = styled.h3`
  font-size: 1.953rem;
`
export const H4 = styled.h4`
  font-size: 1.563rem;
`
export const H5 = styled.h5`
  font-size: 1.25rem
`

