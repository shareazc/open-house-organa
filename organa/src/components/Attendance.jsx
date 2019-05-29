import React from 'react';
import {Card} from 'react-bootstrap'

class Attendance extends React.Component{
    render(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Asistencias</Card.Title>
                    <Card.Text>
                        {this.props.attendance}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Total de estudiantes {this.props.total}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Attendance;