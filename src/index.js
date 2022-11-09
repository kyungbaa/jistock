import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import theme from "./styles/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import "antd/dist/antd.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
