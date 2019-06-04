import React from 'react';
import { Modal } from "react-bootstrap"
import x from '../assets/x.png';
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
                    <Modal.Title><h2>ERROR</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src= {x} alt="fail" style={{height: 300}} />
                    <p>Tu código QR es incorrecto.</p>
                </Modal.Body>

                <Modal.Footer>
                   
                </Modal.Footer>
            </Modal.Dialog>
            </Styles>
        )
        
}
}