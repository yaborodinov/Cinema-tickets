import {
  createGlobalStyle,
  
} from 'styled-components';

export const Global = createGlobalStyle `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
};
`


export const theme = {
  colors: {
    primary: "#FEFEFE",
    secondary: "#3E3F43",
    violet: "#6d53c6",
    yellow: "#feef5c",
  }
}