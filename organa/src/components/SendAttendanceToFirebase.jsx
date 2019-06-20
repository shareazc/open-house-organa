import React from 'react';
import moment from 'moment';
import firebase from "../firebase/FirebaseConfig"

class SendAttendanceToFirebase extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date:  moment().format('ll')
        }
    }
    
    componentWillMount(){
        let date = moment().format('ll');
        const dbRefAttendance = firebase.database().ref();
        const attendanceRef = dbRefAttendance.child('attendance').child(date);
        attendanceRef.push([
            {
                total: this.props.attendance
            }
        ]);
    }

    render(){
        return(
            <div> </div>
        )
    }
}

export default SendAttendanceToFirebase;