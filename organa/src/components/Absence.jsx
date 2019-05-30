import React from 'react';
import {Card} from 'react-bootstrap'

class Absence extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            absence: 0,
            total: 0
        }

        this.numberAbsence = this.numberAbsence.bind(this);
        console.log(props)
        this.render()
        this.numberAbsence(this.props.totalStudents, this.props.totalAttendance);
    }

    // componentDidMount(){
    //     console.log(this.props.totalAttendance + "total de asistencias 1")
    //     console.log(this.props.totalStudents + "total de estudiantes 1")
    //     this.numberAbsence(this.props.totalStudents, this.props.totalAttendance);
    //     console.log(this.state.absence)
    // }

    numberAbsence(totalStudents, totalAttendance){
        const totalAbsence = totalStudents - totalAttendance
        console.log(totalStudents + "funcion 2 ")
        this.setState({
            absence: totalAbsence
        })
    }

    render(){
        console.log(this.props.totalAttendance + "total de asistencias => render 3")
        console.log(this.props.totalStudents + "total de estudiantes => render 3")
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