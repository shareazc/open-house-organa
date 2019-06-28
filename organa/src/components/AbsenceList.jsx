import React from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import YellowBrk from '../assets/YellowbrkL1-01.png';
import Table from 'react-bootstrap/Table';
import moment from "moment";
import firebase from '../firebase/FirebaseConfig';

const Styles = styled.div`
    img {
        height: 20rem;
        z-index: -10;
        position: fixed; 
        bottom: 0px; 
        right: 0px;
    }

    @media only screen and (max-width:425px) {
        img {
            height: 10rem;
        }
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
        // let attendanceWithName = this.state.attendanceWithName.map(name=>{
        //     return(
        //     <Col>{name} </Col>
        //     )
        // })
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
            <Layout><br />
            
            <h2>Ausencias / {date}</h2> <br />
            
            <Table responsive>
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>{absenceWithName}</tr>
                </tbody>
            </Table>
            
            
            </Layout>

                <div className="yellowBrackets">
                    <img className="brackets" src={YellowBrk} alt="Yellow brackets"/>
                </div>
            </div>
            </Styles>
        )
        
    }
}
