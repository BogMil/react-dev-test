import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import modalReducer from "./components/modal/modal.reducer";

export default function createReduxStore() {
  let rootReducer = combineReducers({
    modal: modalReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
}
