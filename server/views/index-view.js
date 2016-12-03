//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from "electrode-redux-router-engine";
import {routes} from "../../client/routes";
import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "../../client/reducers";
import Promise from "bluebird";
import thunk from 'redux-thunk'

function createReduxStore(req, match) { // eslint-disable-line
  const initialState = {
    checkBox: {checked: false},
    number: {value: 999}
    // generator: {
    //   password: 'password from index-view.jsx'
    // }
  };

  const enhancer = compose(
    applyMiddleware(thunk)
  )

  const store = createStore(rootReducer, initialState, enhancer);

  return Promise.all([
    Promise.resolve({})
  ]).then(() => {
    return store;
  });
}

//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }

  return app.routesEngine.render(req);
};
