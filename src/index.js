import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MainScreenComponent from "./components/mainScreen/mainScreen.component";
import { Provider } from "react-redux";
import createReduxStore from "./reduxStore";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ModalAComponent from "./components/modals/modalA/modalA.component";
import ModalBComponent from "./components/modals/modalB/modalB.component";

let store = createReduxStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/modalA">
          <ModalAComponent />
        </Route>
        <Route path="/modalb">
          <ModalBComponent />
        </Route>
        <Route path="/">
          <MainScreenComponent />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
