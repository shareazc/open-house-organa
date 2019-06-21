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
import Autentication from './components/Autentication';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      user: {}
    }
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }


  doesDateExist() {
    const date = moment().format('ll');
    const doesDateExistRef = firebase.database()
      .ref('attendance').child(date);
    // console.log(doesDateExist)

    doesDateExistRef.on('value', snap => {
      let actualDate = snap.exists();
      //console.log(actualDate)
      if (!actualDate) {
        firebase.database().ref('attendance').child(date).child('students')
          .set("0");
      }
    })
  }
  componentDidMount() {
    this.authListener();
    this.doesDateExist()
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => this.state.user ? (<Scanner />) : (<Autentication />)} />
            <Route exact path="/summary" component={Summary} />
            <Route path="/success" component={Success} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
