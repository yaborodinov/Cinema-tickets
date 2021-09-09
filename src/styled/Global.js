import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };
  ul,ol,li {
    list-style: none;
    padding-left: 0;
  };
  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const theme = {
  colors: {
    primary: '#FEFEFE',
    secondary: '#3E3F43',
    violet: '#6d53c6',
    yellow: '#feef5c',
    backgroundViolet: '#aa85ee',
    backgroundVioletLighter: '#cbafff',
    disabled: '#ccc'
  },
  transition: {
    transition: 'all 0.2s linear'
  },
  media: {
    medium: '768px'
  },
  fontSize: {
    medium: '24px'
  }
};
