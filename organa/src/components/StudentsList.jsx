import React from "react";
import AquaBrcktR from "../assets/AquabrkR2.png";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .detailButton {
        float: right;
    }

    p, .p {
        margin-bottom: 0;
    }
`;

const styleRight = {
    height: "4rem",
    float: "right" 
};

class DetailedList extends React.Component {
    render() {
    return (
        <Styles>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title><h3>Lista completa de estudiantes</h3></Card.Title>
                    <Card.Text />
                    <Card.Text>
                    <div className="detailButton">
                        <Link to="/full-list">
                        <Button
                        variant="outline-light"
                        >
                        <img
                            className="brackets"
                            src={AquaBrcktR}
                            style={styleRight}
                            alt="LabBrackets"
                        />
                        </Button>
                        <small className="text-muted"><p>Ver</p></small>
                        </Link>
                    </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Styles>
    );
    }
}

export default DetailedList;
