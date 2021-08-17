import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
  font-family:consolas;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Global/>
      <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


