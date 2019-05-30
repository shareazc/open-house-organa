import React from 'react';
import { Modal } from "react-bootstrap"
import check from '../assets/check-animation-v2.gif';
import styled from "styled-components";

const Styles = styled.div`
    .modal-content{
        text-align: center;
    }

`

export default class ScanSuccessPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }
    render(){
        // setTimeout(()=> this.setState({redirect: true}), 3000)    
        return(
            <Styles>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title><h2>¡Bienvenida!</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src= {check} alt="success" style={{height: 300}} />
                    <p>Tu asistencia ha sido registrada exitosamente.</p>
                </Modal.Body>

                <Modal.Footer>
                   
                </Modal.Footer>
            </Modal.Dialog>
            </Styles>
        )
        
}
}