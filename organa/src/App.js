import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Scanner from './components/Scanner';
import  Summary  from './components/Summary';
import Navigation from './components/Navigation';
import Success from './components/Success';
import { NoMatch } from './components/NoMatch';

import './App.css';

function App() {
  return (
    <div className="App">
    
     <Router>
     <Navigation />
       <Switch>
         <Route exact path = "/" component = {Scanner} />
         <Route path = "/summary" component = {Summary} />
         <Route path = "/success" component = {Success} />
         <Route component = {NoMatch} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
