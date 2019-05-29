import React from 'react';
import {Card} from 'react-bootstrap'

class Absence extends React.Component{
    render(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Inasistencias</Card.Title>
                    <Card.Text>
                        {this.props.absence}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Absence;