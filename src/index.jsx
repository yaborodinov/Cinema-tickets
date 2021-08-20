import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {ThemeProvider} from "styled-components"

import App from "./App";
import {Global, theme} from "./styled/Global"






ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
        <App/>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);


