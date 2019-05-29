import React from 'react';
import {Card} from 'react-bootstrap'

class Attendance extends React.Component{

    constructor(){
        super();

        this.state = {
            attendance: 0,
            total: 0
        }
        this.numberAttendance = this.numberAttendance.bind(this);
    }


    numberAttendance(attendancList, totalStudents){
        const attendance = attendancList.length;
        this.setState({ 
            attendance: attendance,
            total: totalStudents
        })
    }

    render(){
        this.numberAttendance(this.props.list, this.props.total)
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Asistencias</Card.Title>
                    <Card.Text>
                        {this.state.attendance}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Total de estudiantes {this.state.total}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Attendance;