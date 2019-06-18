import React from "react";
import {Button, Form} from "react-bootstrap";
import firebase from "../firebase/FirebaseConfig"

class Autentication extends React.Component{
    constructor(){
        super();
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        
    }

    login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error)=>{
            console.log(error);
        });
    }
    
    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Ingresa tu correo" />
                    <Form.Text className="text-muted">
                        No compartiremos tu correo con nadie más.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.login}>
                    Ingresar
                </Button>
            </Form>
        )
    }
}

export default Autentication;

