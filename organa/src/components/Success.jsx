import React from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap"
import styled from "styled-components";

const Styles = styled.div`
    .modal-title {

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
                <Modal.Header closeButton>
                    <Modal.Title><h3>¡Bienvenida!</h3></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Tu código ha sido escaneado de manera exitosa. </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Styles>
        )
        
}
}