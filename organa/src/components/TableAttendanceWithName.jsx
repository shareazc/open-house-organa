import React from 'react';
import { Row, Col} from 'react-bootstrap';
import {Layout} from './Layout';
import moment from "moment";
import firebase from '../firebase/FirebaseConfig';
import styled from 'styled-components';

const Styles = styled.div`
    img {
        height: 20rem;
        z-index: -10;
        position: fixed; 
        bottom: 0px; 
        right: 0px;
    }
`

const date = moment().format("ll");
const dbAttendanceRef = firebase
      .database()
      .ref("attendance")
      .child(date)
      .child("students");

export default class TableAttendanceWithName extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            studentsFilteredInDataBase:[],
            attendanceWithName: [],
            absenceWithName:[],
            indexOfAttendance:[]
        }
    }

    componentDidMount() {
        fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
        .then(response => response.json())
        .then(data => {
          const studentsFilteredInDataBase = data.filter(item =>
            item.role === 'student')
            this.setState({
                studentsFilteredInDataBase: studentsFilteredInDataBase
            })           
           dbAttendanceRef.on('value', snap => {
             this.state.studentsFilteredInDataBase.forEach(i=>{
               let index = snap.val().indexOf(i.id)
               if (index != -1){
                this.setState({
                    attendanceWithName: [...this.state.attendanceWithName, i.name]
                   }) 
               }else{
                this.setState({
                    absenceWithName: [...this.state.absenceWithName, i.name]
                   })
               }
              
             }); 
               })    
        })
    }

    render(){
       let attendanceWithName = this.state.attendanceWithName.map(name=>{
           return(
           <tr>
                <td>{name}</td> 
            </tr>
           )
       })
        let absenceWithName=this.state.absenceWithName.map(i=>{
            return(
                <tr>
                    <td>{i}</td>
                </tr>
            )
        })

        return(
        <Styles>
            <div> 
                <Layout> <br />
                
                {/* <Table responsive>
                    <thead>
                        <tr>
                            <th>Asistencias</th>
                            <th>Ausencias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{attendanceWithName}</td>
                        </tr>
                        <tr>
                            <td>{absenceWithName}</td>
                        </tr>
                    </tbody>
                </Table> */}

                <Row>
                    <Col lg={8}><h2 >Asistencias</h2>
                        {attendanceWithName}
                    </Col>
                    <Col lg={4}><h2>Ausencias</h2>
                        {absenceWithName}
                    </Col>
                </Row>
                </Layout>
            </div>
        </Styles>
        )
    }
}

