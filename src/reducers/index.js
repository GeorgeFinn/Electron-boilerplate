import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import generatorReducer from './generatorReducer';
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  generator: generatorReducer,
  errors: errorReducer,
  loadingBar: loadingBarReducer
});
