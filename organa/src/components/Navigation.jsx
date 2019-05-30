import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoLBLK from '../assets/LaboratorialogoBLK.png';
import LisoBLK from '../assets/LisotipoBLK.png';
import styled from "styled-components";
import Date from './Date.jsx';

const Styles = styled.div`
  .navbar {
    background-color: #ffe521;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{
    margin-top: .5rem;
    margin-left: 3rem;
    font-weight: bold;
    
  }

`;



class Navigation extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
            <img src={LisoBLK} height="25" alt="Logo Laboratoria" /> <Date/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Scanner</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/summary">Resumen</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;


/*

const Styles = styled.div`
  .navbar {
    background-color: #ffe521;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{
    margin-top: .5rem;
    margin-right:  6rem;
    font-weight: bold;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
            <img src={LogoLBLK} width="200" height="25" alt="Logo Laboratoria" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Date/></Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Scanner</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/summary">Resumen</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;
*/