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
  borders: {
    borderViolet: '#aa85ee'
  },
  boxShadows: {
    boxShadowViolet: '0px 0px 15px 4px #9363eb'
  },
  transition: {
    transition: 'all 0.2s ease-out'
  },
  media: {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px'
  },
  fontSize: {
    small: '14px',
    medium: '18px',
    large: '24px',
    extraLarge: '30px'
  }
};
