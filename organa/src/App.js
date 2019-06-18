import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Scanner from './components/Scanner';
import Summary from './components/Summary';
import Navigation from './components/Navigation';
import Success from './components/Success';
import { NoMatch } from './components/NoMatch';
import './App.css';
import Autentication from './components/Autentication';
import firebase from "./firebase/FirebaseConfig"

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        user: {}
      }
    }

    componentDidMount(){
      this.authListener()
    }

    authListener(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: null });
        }
      })
    }

    render() {
      return (
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              {this.state.user ? (<Scanner />) : (<Autentication />)}
              <Route path="/summary" component={Summary} />
              <Route path="/success" component={Success} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      );
    }


  }

  export default App;
