import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`

* {
    
}

body {
    margin: 0px;
    padding: 0;    
}

html {
    background: #1D1D1D;
    color: white;
    margin: 0px auto;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

h1, h2, h3, h4, h5, h6 {
  color: white;
}


pre {

    /* color: #707070; */
    background-color: #222222;
    border-radius: 6px;
    padding: 14px;
}

img {
    width: 100%;
}

p {
    font-size: 0.9rem;
}

`;

export default Global;
