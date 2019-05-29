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

    componentDidMount() {
        this.numberAttendance(50)
    }


    numberAttendance(totalStudents){
        this.setState({ 
            total: totalStudents
        })
    }

    render(){
        
        console.log(this.props.totalAttendance)
        console.log(this.props.date)
        console.log(this.state)
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Asistencias</Card.Title>
                    <Card.Text>
                        {this.props.totalAttendance}
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