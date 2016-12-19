//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import { Router, browserHistory } from "react-router";
import { createStore, compose, applyMiddleware } from "redux";
import {Provider} from "react-redux";

import "./styles/base.css";
import rootReducer from "./reducers";

import thunk from 'redux-thunk'
import DevTools from "../client/devtools";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//

const enhancer = compose(
  // Add middlewares you want to use in development:
  // applyMiddleware(d1, d2, d3),
  applyMiddleware(thunk),
  DevTools.instrument()
);

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = createStore(rootReducer, initialState, enhancer);
  render(
    <Provider store={store}>
      <div>
        <Router history={browserHistory}>{routes}</Router>
        <DevTools />
      </div>
    </Provider>,
    document.querySelector(".js-content")
  );
};

