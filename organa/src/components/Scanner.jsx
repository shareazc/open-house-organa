import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Layout } from './Layout';
import styled from "styled-components";
import pnkBrktR from '../assets/PinkBracketsRight.png';
import pnkBrktL from '../assets/PinkBracketsLeft.png';
import Success from "./Success"
import SendAttendanceToFirebase from './SendAttendanceToFirebase'
//ADD <span className="numbers"> </span> 
//SO NUMBERS HAVE THE RIGHT FONT


const Styles = styled.div`
  * {
    margin-top: 2rem;
    margin: auto;
    text-align: center;
    border-radius: 1rem;
  }  

`;

const styleRight = {
  height: '100px',
  float: 'right'
};


class Scanner extends Component {
  constructor(props) {
    super(props)
    this.state = {

      delay: 500,
      result: false, 
      attendance: [],
      scanner: [],
      cleanAttendance: []
    }
    

     this.scanData = this.scanData.bind(this) 
    this.findDuplicate = this.findDuplicate.bind(this)
  }
   scanData(data) {
    this.setState({
      result: data
    })
    
  } 

  findDuplicate(data) {
    if (data != null) {
      this.setState({
        scanner: data,
      })
      console.log(this.state.scanner)
      this.setState({
        attendance: [...this.state.attendance, this.state.scanner]
      })
      console.log(this.state.attendance)
      this.setState({
        result: true
      })
    }
  }



  handleError(err) {
    console.error(err)
  }



  render() {
    if(this.state.result !== false){
      setTimeout(()=> this.setState({result: false}), 3000)    
      return <Success/>
    }


    const previewStyle = {
      //height: 600,
      width: 400,
    }

    return (
      <div>
        <br />
        <img className="brackets" src={pnkBrktL} style={{height: 100}} alt="LabBrackets" />
        <Layout>
          <Styles>
              <h1>¡Bienvenida!</h1>
              <p>Por favor, escanea tu código QR</p>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.findDuplicate}
            />

            <h1>{this.state.result}</h1>
            {/* {console.log (this.state.cleanAttendance)} */}
          </Styles>

        </Layout>
        <SendAttendanceToFirebase attendance={this.state.attendance}/>
        <img className="brackets" src={pnkBrktR} style={styleRight} alt="LabBrackets" />
      </div>
    )
  }
}

export default Scanner; 