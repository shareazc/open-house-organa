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
            list: [],
            total: 0
        }
    }

    componentDidMount(){
        const attendanceList = firebase.database().ref('attendance');
        attendanceList.on('value', (s) =>{
            let attendanceStudents = s.val();
            for(let attendanceStudent in attendanceStudents){
                this.setState({
                    date: attendanceStudents[attendanceStudent].date,
                    list: attendanceStudents[attendanceStudent].list,
                });
            }
        })
        const totalStudentsList = firebase.database().ref('general-list');
        totalStudentsList.on('value', (s)=>{
            let totalStudents = s.val();
            const totalStudent = totalStudents.length;
            this.setState({
                total: totalStudent
            })
        })
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col lg={8}><h1 ><Attendance date={this.state.date} list={this.state.list} total={this.state.total}/></h1></Col>
                    <Col lg={4}><h2><Absence date={this.state.date} list={this.state.list}/></h2></Col>
                </Row>
            </Container>
        )
    }
}

export default Summary;

 