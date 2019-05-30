import React from 'react';
import {Card} from 'react-bootstrap'

class Attendance extends React.Component{

    render(){
        return(
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Asistencias</Card.Title>
                    <Card.Text>
                    <span className="numbers" style={{fontSize:60}}>{this.props.totalAttendance}</span>
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Total de estudiantes <span className="numbers">{this.props.totalStudents}</span></small>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Attendance;