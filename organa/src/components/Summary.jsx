import React from 'react';
import firebase from '../firebase/FirebaseConfig';
import Attendance from './Attendance';
import Absence from './Absence';
import {Container, Row, Col} from 'react-bootstrap';
import moment from 'moment';

class Summary extends React.Component{

    constructor(){
        super();
        this.state = {
            date: [],
            totalAttendance: 0,
            totalStudents: 0
        }
    }

    componentWillMount(){
        const currentDate = moment().format("ll");
        const attendanceList = firebase.database().ref('attendance').child(currentDate).child("students");
        const totalStudentsNumber = firebase.database().ref('totalStudentsInDB');
        attendanceList.on('value', (s) =>{
            let attendanceStudents = s.val();
            for(let attendanceStudent in attendanceStudents){
                    this.setState({
                        date: attendanceStudent,
                        totalAttendance: attendanceStudents.length -1
                       // The -1 is due to Firebase's requirement to have a value when starting an array
                    });
            }
        })
        totalStudentsNumber.on('value', (s)=>{
            let totalStudents = s.val();
                this.setState({
                    totalStudents: totalStudents.totalStudents -4  
                    //The -4 number represents the drop-outs
                })
        })
    }

    render(){
        return(
            <Container>
                <br />
                <Row>
                    <Col lg={8}><h1 ><Attendance totalAttendance={this.state.totalAttendance} totalStudents={this.state.totalStudents}/></h1></Col>
                    <Col lg={4}><h2><Absence totalAttendance={this.state.totalAttendance} totalStudents={this.state.totalStudents}/></h2></Col>
                </Row>
            </Container>
        )
    }
}

export default Summary;