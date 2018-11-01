import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import LoadingBar from "react-redux-loading";

import App from "./containers/App";
import Home from "./containers/Home";

import { getContainers, getComponents, getStyles } from './actions/generatorActions'

import store from "./store";

store.dispatch(getContainers());
store.dispatch(getComponents());
store.dispatch(getStyles());

ReactDom.render(
    <Provider store={store}>
        <App>
          <LoadingBar />
          <Home />
        </App>
    </Provider>,
  document.getElementById("app")
);
