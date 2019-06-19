import React, { Component } from 'react';
import firebase from '../firebase/FirebaseConfig';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      totalStudents: 0,
      totalData : [],
      studentName: {},
      handleSuccess: false
    }
    this.findStudent = this.findStudent.bind(this)

  }
//antes del render
  componentDidMount() {
    fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
    .then(response => response.json())
    .then(data => {
      const filterDataBase = data.filter(item =>
        item.role === 'student')
        this.setState({
          totalStudents: filterDataBase.length,
          totalData: filterDataBase
        })
        const dbReftotalStudents = firebase.database().ref();
        const totalStudentsRef = dbReftotalStudents.child('totalStudentsInDB');
        totalStudentsRef.set(
          {
              totalStudents: this.state.totalStudents
          }
        )
          this.findStudent(this.props.scanId, this.state.totalData)
        return filterDataBase
    })

  }

  findStudent(id, data){
    const filterName = data.find(item =>
      item.id === id
      )
      if(filterName !== undefined){
        const name = filterName.name
        this.setState({
          studentName: name
        })
        return name
      }
  }

  render() {
    // console.log(this.state.studentName)

    return (
      <div>
        {/* {this.state.handleSuccess === true ? <Success name={this.state.studentName}/> : <div></div>} */}
      </div>
    )
  }
}

export default Fetch;