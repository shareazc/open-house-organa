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
        const attendanceList = firebase.database().ref('attendance');
        const totalStudentsNumber = firebase.database().ref('totalStudentsInDB');
        attendanceList.on('value', (s) =>{
            let attendanceStudents = s.val();
            // console.log(attendanceStudents);
            for(let attendanceStudent in attendanceStudents){
                console.log(moment().format('ll'))
                const currentDate = moment().format("ll");
                attendanceStudents[currentDate].map((total, i)=>{
                    const totalAttendance = total.total;
                    this.setState({
                        date: attendanceStudent,
                        totalAttendance: totalAttendance.length
                    });
                    return totalAttendance;
                })

                // console.log(this.state.date)
                // console.log(this.state.totalAttendance)
            }
        })
        totalStudentsNumber.on('value', (s)=>{
            let totalStudents = s.val();
                this.setState({
                    totalStudents: totalStudents.totalStudents
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