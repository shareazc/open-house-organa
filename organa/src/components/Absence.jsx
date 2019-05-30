import React from 'react';
import {Card} from 'react-bootstrap'

class Absence extends React.Component{

    render(){
        const totalAbsence =  this.props.totalStudents - this.props.totalAttendance 
        return(
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Inasistencias</Card.Title>
                    <Card.Text>
                        {totalAbsence}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Absence;