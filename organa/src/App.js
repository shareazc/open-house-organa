import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Scanner from './components/Scanner';
import  Summary  from './components/Summary';
import { NoMatch } from './components/NoMatch';

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = "/" component = {Scanner} />
         <Route path = "/summary" component = {Summary} />
         <Route component = {NoMatch} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
