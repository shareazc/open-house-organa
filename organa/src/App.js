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

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       
        user: {}
    }
  }
  componentDidMount(){
     this.authListener();
// create a new date the firt time the application has been opended in that day
       const date =  moment().format('ll');
   /*    const doesDateExist = firebase.database()
      .ref('attendance').orderByChild('date').equalTo(date).once('value').then(function(snapshot) {
        console.log(snapshot.exists() ? 'user exist' : 'user non existent');
      });  */
   
   
      /*  const doesDateExist = firebase.database()
      .ref('attendance').child(date);

      doesDateExist.once('value')
      .then( (snap)=>{
        let actualDate = snap.val() && snap.val().date|| 'Anonymous' ;
        console.log(actualDate)
        if(actualDate=='Anonymous'){
         let newDate = moment().format('ll');   
          firebase.database().ref('attendance/' + newDate)
          .set(newDate) 
         }
      }) */
   

  /*     const dbRefDate = firebase.database().ref()
      .child('attendance').child(date)
      .once('value').then(function(snapshot) {
        var usuario = (snapshot.val() && snapshot.val().usuario) || 'No Existe';
        if(usuario!='No Existe'){
           console.log('no existe') //Aqui indicas el codigo de escucha de eventos para ese nodo
           
        }else{
           console.log('existe') //Alerto que el Usuario no Existe
           firebase.database().ref('attendance/' + date)
           .set(date)
          }+

    }, function(error){
        //En caso de error de conexion con Firebase
        console.log(error);
    }); */

    /* const doesDateExist = firebase.database()
    .ref('attendance').child(date);
    doesDateExist.once('value', snap=>{
        console.log(snap.val())

        if(snap.val()==null){
          console.log('valor null')
          firebase.database().ref()
      .child('attendance/'+ date).set(date)

        }else(
          console.log('existe fecha del dia actual en db')
        )
      })  */
      


       const doesDateExist = firebase.database()
      .ref('attendance').child(date);
     // console.log(doesDateExist)
      
      doesDateExist.once('value', snap=>{
        let actualDate = snap.exists();
        console.log(actualDate)

          if(actualDate==false){
           firebase.database().ref('attendance/' + date)
          .set(date)  
         } 
      })   
     this.doesDateExist();
   }
  //
  doesDateExist(){
   /*  const date =  moment().format('ll');
    
  const doesDateExist = firebase.database()
  .ref('attendance').child(date);

 doesDateExist.once("value")
 .then(function(snapshot) {
 return snapshot.exists();  // true
}).then(data=>{
 console.log(data)
    if(data==false){
    console.log('no existe')
    firebase.database().ref('attendance/' + date)
          .set(date)  
  }  
}); */
  }
  
    authListener(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({user});
        } else {
          this.setState({user: null});
        }
      })
    }
  
  render(){
 
    return (
      <div className="App">
       <Router>
       <Navigation />
         <Switch>
          <Route exact path="/" render={() => this.state.user ? (<Scanner/>) :  (<Autentication/>)} />
           <Route exact path = "/summary" component = {Summary} />
           <Route path = "/success" component = {Success} />
           <Route component = {NoMatch} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
