import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoL from '../assets/Laboratorialogo.png';
import styled from "styled-components";
import Date from './Date'



// Convert string '2014-02-11T11:30:30' to date:
//var result = parse('2014-02-11T11:30:30')
//=> Tue Feb 11 2014 11:30:30

var isToday = require('date-fns/parse')


const Styles = styled.div`
  .navbar {
    background-color: #f1f1f1;
  }
`;

class Navigation extends React.Component {
  
  constructor (){
    super()
    this.state = {
        date: 'date'
    }
    var today = new Date()
    console.log( today)
    console.log(new Date())
    console.log( isToday(today))
}

  render() {
    return (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand>
        <img src= { LogoL }
        width="200"
        height="25" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
       <Nav.Item>
            
              <Date  date={this.state.date}/> 
         
          </Nav.Item> 
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
  )
  }
};

export default Navigation;
