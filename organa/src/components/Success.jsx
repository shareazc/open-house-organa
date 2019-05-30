import React from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap"

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
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
        
}
}