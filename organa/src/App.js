import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Scanner from './components/Scanner';
import Summary from './components/Summary';
import Navigation from './components/Navigation';
import Success from './components/Success';
import { NoMatch } from './components/NoMatch';
import './App.css';
import moment from 'moment';
import firebase from './firebase/FirebaseConfig';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        date:  moment().format('ll')
    }
  }
  componentDidMount(){
      const doesDateExist = firebase.database()
      .ref('attendance').child(this.state.date);
      doesDateExist.on('value', snap=>{
        let actualDate = snap.val();
        if(actualDate==null){
         let newDate = moment().format('ll');   
          firebase.database().ref('attendance/' + newDate)
          .set(newDate) 
      }
    })
  }
 

  render(){
 
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
  

}

export default App;
