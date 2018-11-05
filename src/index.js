import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import LoadingBar from "react-redux-loading";

import App from "./containers/App";
import ContainerPage from "./containers/ContainerPage";

import store from "./store";

ReactDom.render(
    <Provider store={store}>
        <App>
          <LoadingBar />
          <ContainerPage />
        </App>
    </Provider>,
  document.getElementById("app")
);
