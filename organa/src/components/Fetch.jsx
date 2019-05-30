import React, { Component } from 'react';
//import FilterData from './FilterData'
//import SendDataToFirebase from './SendDataToFirebase';
import firebase from '../firebase/FirebaseConfig';
class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      totalStudents: 0
    }
  }
 /*  filterData=()=> {
    const fullDataBase = data
    const filterDataBase = fullDataBase.filter(item =>
      item.role === 'student')
    const totalStudents = filterDataBase.length //total 52 estudiantes
    this.setState({
      totalStudents: totalStudents
    })
  }

  sendDataToFirebase=() =>{
    console.log(this.state.totalStudents)
    const dbReftotalStudents = firebase.database().ref();
    const totalStudentsRef = dbReftotalStudents.child('totalStudentsInDB');
    totalStudentsRef.set([
      {
        totalStudents: this.state.totalStudents
      }
    ]);
  } */
  componentDidMount() {
    fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
    .then(response => response.json())
    .then(data => {
      const filterDataBase = data.filter(item =>
        item.role === 'student')
        this.setState({
          totalStudents: filterDataBase.length
        })
        console.log(this.state.totalStudents)
        const dbReftotalStudents = firebase.database().ref();
        const totalStudentsRef = dbReftotalStudents.child('totalStudentsInDB');
        totalStudentsRef.set(
          {
              totalStudents: this.state.totalStudents
          }
        )
        return filterDataBase
    })
    // .then(data => {
    //   const dbReftotalStudents = firebase.database().ref();
    //   const totalStudentsRef = dbReftotalStudents.child('totalStudentsInDB');
    //   totalStudentsRef.set([
    //     {
    //         totalStudents: totalStudents
    //     }
    // ])
    // });
  }
  
  render() {
    return (
      <div>   </div>
    )
  }
}

export default Fetch; 