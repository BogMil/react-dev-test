import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default function createReduxStore() {
  let rootReducer = combineReducers({});

  return createStore(rootReducer, applyMiddleware(thunk));
}
