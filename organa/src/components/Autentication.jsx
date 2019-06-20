import React from "react";
import { Button, Form } from "react-bootstrap";
import firebase from "../firebase/FirebaseConfig";
import { Layout } from "./Layout";
import pnkBrktR from "../assets/PinkBracketsRight.png";
import styled from "styled-components";

const Styles = styled.div`
  .loginScreen {
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;
  }

  .greeting {
    align-self: center;
  }

  .loginForm {
    align-self: center;
  }

  .loginButton {
    height: 100px;
    text-align: center;
  }
`;

const styleRight = {
  height: "100px",
  float: "right"
};

class Autentication extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Layout>
        <Styles>
          <div className="loginScreen">
            <div className="greeting">
                <br/>
              <h1>¡Bienvenida, Sam!</h1>
            </div>
            <div className="loginForm">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Ingresa tu correo"
                  />
                  <Form.Text className="text-muted">
                    No compartiremos tu correo con nadie más.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Ingresa tu contraseña"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="loginButton">
              <Button
                variant="outline-light"
                type="submit"
                onClick={this.login}
              >
                <img
                  className="brackets"
                  src={pnkBrktR}
                  style={styleRight}
                  alt="LabBrackets"
                />
              </Button>
              <p>Ingresar</p>
            </div>
          </div>
        </Styles>
      </Layout>
    );
  }
}

export default Autentication;
