import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

* {

}

ul {
    padding: 0;
    margin: 0;

}



body {
    margin: 0px;
    padding: 0;    
    -webkit-text-size-adjust: 100%;

}

html {  
    background: #fff;
    color: black;
    margin: 0px auto;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
    
    
}

h1 {
    font-size: 3.052rem;
}

h2 {
    font-size: 2.441rem;
}

h3 {
    font-size: 1.953rem;
}

h4 {
    font-size: 1.563rem;
    font-weight: 550;
    margin: 1.6rem 0;
}

h5 {
    font-size: 1.25rem;
    margin: 0px;
}

h6 {
    font-size: 1.1rem;
    font-weight: 550;
    margin: 1.6rem 0;
}

p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
}

ul {

}

ol {

}

li {
    font-size: 1rem;
    line-height: 1.5;

}

pre {

    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 14px;
    white-space: pre-wrap;
    max-width: 100%;
    line-height: 1.6;
}

figure {
    margin: 0;
    padding: 0%;
}
img {
    width: 100%;
}

p {
    font-size: 0.9rem;
    font-weight: 400;

    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
    }
}

`

export default Global
