import React, { Component } from 'react';
import firebase from '../firebase/FirebaseConfig';
class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      totalStudents: 0
    }
  }

  componentDidMount() {
    fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
    .then(response => response.json())
    .then(data => {
      const filterDataBase = data.filter(item =>
        item.role === 'student')
        this.setState({
          totalStudents: filterDataBase.length
        })
        // console.log(this.state.totalStudents)
        const dbReftotalStudents = firebase.database().ref();
        const totalStudentsRef = dbReftotalStudents.child('totalStudentsInDB');
        totalStudentsRef.set(
          {
              totalStudents: this.state.totalStudents
          }
        )
        return filterDataBase
    })
  }
  
  render() {
    return (
      <div> </div>
    )
  }
}

export default Fetch; 