import { createStore, compose } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";

const initialState = {
  generator: {
    components: [],
    containers: [],
    styles: []
  }
};

const store = createStore(
  reducer,
  initialState,
  compose(
    middleware,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
