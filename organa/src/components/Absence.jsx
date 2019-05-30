import React from 'react';
import {Card} from 'react-bootstrap'

class Absence extends React.Component{

    constructor(){
        super();

        this.state = {
            absence: 0,
            total: 0
        }

        this.numberAbsence = this.numberAbsence.bind(this);
    }

    componentDidMount(){
        console.log(this.props.totalAttendance + "componentdidmount")
        this.numberAbsence(50);
    }

    numberAbsence(){
        const totalAbsence = 50 - this.props.totalAttendance
        console.log(this.props.totalAttendance + "1")
        this.setState({
            absence: totalAbsence
        })
    }

    render(){
        console.log(this.props.totalAttendance + "render")
        // console.log(this.props.date)
        // console.log(this.state)
        return(
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Inasistencias</Card.Title>
                    <Card.Text>
                        {this.state.absence}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Absence;