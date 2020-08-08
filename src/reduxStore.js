import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import modalReducer from "./components/modal/modal.reducer";
import modalCReducer from "./components/modalC/modalC.reducer";

export default function createReduxStore() {
  let rootReducer = combineReducers({
    modal: modalReducer,
    modalC: modalCReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
}
