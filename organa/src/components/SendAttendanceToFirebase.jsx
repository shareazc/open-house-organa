import React from 'react';
import moment from 'moment';
import firebase from "../firebase/FirebaseConfig"

/* export default function Date (){
    return <h5> {moment().format('lll')}</h5>
} */


class SendAttendanceToFirebase extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date:  moment().format('ll')
        }
    }
    
    componentDidMount(){
        // let date = moment().format('ll');
        // const dbRefAttendance = firebase.database().ref();
        // const attendanceRef = dbRefAttendance.child('attendance').child(date);
        // attendanceRef.set([
        //     {
                
        //         total: this.props.attendance
        //     }
        // ]);
    }

    render(){
        // console.log(this.props.attendance )
        // console.log(moment().format('LL'))
        return(

            <div> </div>

        )
    }
}

export default SendAttendanceToFirebase;