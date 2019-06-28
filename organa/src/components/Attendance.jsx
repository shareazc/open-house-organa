import React from 'react';
import {Card} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
    .card-text:last-child {
        font-size: 0.6em;
    }
`

class Attendance extends React.Component{

    render(){
        return(
            <Styles>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title><h3>Asistencias</h3></Card.Title>
                    <Card.Text>
                    <span className="numbers" style={{fontSize:60}}>{this.props.totalAttendance}</span>
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted"><p>Total de estudiantes </p><span className="numbers">{this.props.totalStudents}</span></small>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Styles>
        )
    }
}

export default Attendance;