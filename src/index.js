import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  {
  createGlobalStyle
} from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';



const Global = createGlobalStyle`
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

ReactDOM.render(
  <React.StrictMode>
    <Global/>
      <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


