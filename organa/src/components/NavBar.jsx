import React from "react";
import { Navbar, Nav } from "react-bootstrap/Navbar";
//import styled from "styled-components";

/*
const Styles = styled.div`
`;
*/

export const NavBar = () => (

    <Navbar bg="light" variant="light">
      <Navbar.Brand> Organa </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>

);
