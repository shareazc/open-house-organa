import React from 'react';
import firebase from '../firebase/FirebaseConfig';
import Attendance from './Attendance';
import Absence from './Absence';
import {Container, Row, Col} from 'react-bootstrap';

class Summary extends React.Component{

    constructor(){
        super();
        this.state = {
            date: [],
            totalAttendance: 0,
            totalStudents: 0
        }
    }

    componentDidMount(){
        const attendanceList = firebase.database().ref('attendance');
        const totalStudentsNumber = firebase.database().ref('totalStudentsInDB');
        attendanceList.on('value', (s) =>{
            let attendanceStudents = s.val();
            for(let attendanceStudent in attendanceStudents){
                this.setState({
                    date: attendanceStudents[attendanceStudent].date,
                    totalAttendance: attendanceStudents[attendanceStudent].total,
                });
            }
        })
        totalStudentsNumber.on('value', (s)=>{
            let totalStudents = s.val();
            for(let totalStudent in totalStudents){
                this.setState({
                    totalStudents: totalStudents[totalStudent].totalStudents
                })
            }
        })
    }

    render(){
        return(
            <Container>
                <br />
                <Row>
                    <Col lg={8}><h1 ><Attendance totalAttendance={this.state.totalAttendance} totalStudents={this.state.totalStudents}/></h1></Col>
                    <Col lg={4}><h2><Absence list={this.state.totalAttendance} totalStudents={this.state.totalStudents}/></h2></Col>
                </Row>
            </Container>
        )
    }
}

export default Summary;