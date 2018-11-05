import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import LoadingBar from "react-redux-loading";
import { createGlobalStyle } from 'styled-components'

import App from "./containers/App";
import ContainerPage from "./containers/ContainerPage";

import store from "./store";

const GlobalStyle = createGlobalStyle`
  main, html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
  a {
    color:#000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: $light_blue;
    }
  }
`

ReactDom.render(
    <Provider store={store}>
        <App>
          <Fragment>
            <GlobalStyle />
            <LoadingBar />
            <ContainerPage />
          </Fragment>
        </App>
    </Provider>,
  document.getElementById("app")
);
