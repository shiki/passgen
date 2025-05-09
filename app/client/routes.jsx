import React from 'react'
import {Route, IndexRoute} from 'react-router'
// import Home from "./components/home";
import Home from './routes/home/Home'
import About from './components/about'

export const routes = (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
)
