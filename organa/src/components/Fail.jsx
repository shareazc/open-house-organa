import React from 'react';
import { Modal } from "react-bootstrap"
import fail from '../assets/fail-animation.gif';
import styled from "styled-components";

const Styles = styled.div`
    .modal-content{
        text-align: center;
    }
`

export default class Fail extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Styles>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title><h2>Error</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src= {fail} alt="fail" style={{height: 300}} />
                    <p>Tu código QR es incorrecto.</p> <br />
                </Modal.Body>
            </Modal.Dialog>
            </Styles>
        )

}
}