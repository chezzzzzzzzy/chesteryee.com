import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

* {

}

ul {
    padding: 0;
    margin: 0;

}

li {
    list-style: none;

}

body {
    margin: 0px;
    padding: 0;    
    -webkit-text-size-adjust: 100%;

}

html {
    background: #1D1D1D;
    color: white;
    margin: 0px auto;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
    
    
}

h1, h2, h3, h4, h5, h6 {
  color: white;
}


pre {

    /* color: #707070; */
    background-color: #222222;
    border-radius: 6px;
    padding: 14px;
    word-wrap: break-word;
    max-width: 100%;
}

img {
    width: 100%;
}

p {
    font-size: 0.9rem;


    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
    }
}

`

export default Global
