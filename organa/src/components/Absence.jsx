import React from 'react';
import {Card} from 'react-bootstrap'

class Absence extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            absence: 0,
            total: 0
        }
    }

/*     componentWillReceiveProps(){
        const totalAbsence = this.props.totalStudents - this.props.totalAttendance
        console.log(totalAbsence + "funcion 2 ")
        this.setState({
            absence: totalAbsence
        })
    }
 */
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