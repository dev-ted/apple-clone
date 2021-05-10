import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../components/Home';
import '../App.css';


function DesktopView() {
    return (
         <div className="app">
      <Router>
        <div className="app__header">
          <Header />
        </div>
        <Switch>
          <Route exact path="/"  >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    )
}

export default DesktopView
