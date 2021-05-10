import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../App.css'

import MobileHeader from '../components/MobileHeader';
import MobileHome from '../components/MobileHome';


function MobileView() {
    return (
         <div className="app">
      <Router>
        <div className="app__header">
          <MobileHeader />
        </div>
        <Switch>
          <Route exact path="/"  >
            <MobileHome />
          </Route>
        </Switch>
      </Router>
    </div>
    )
}

export default MobileView;
