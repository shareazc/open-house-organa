import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Layout } from './Layout';
import styled from "styled-components";
import { Redirect } from 'react-router-dom';
import pnkBrktR from '../assets/PinkBracketsRight.png';
import pnkBrktL from '../assets/PinkBracketsLeft.png';

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

      delay: 1000,
      result: null,
      attendance: [],
      scanner: [],
      cleanAttendance: []
    }
    
  this.findDuplicate = this.findDuplicate.bind(this)
  this.handleScan = this.handleScan.bind(this)

  }
 /*  scanData(data) {
    this.setState({
      result: data
    })
  } */

  findDuplicate(data) {
    if (data != null) {
      this.setState({
        scanner: data
      })
      // console.log(this.state.scanner)
      this.setState({
        attendance: [...this.state.attendance, this.state.scanner]
      })

      const clean = [...new Set(this.state.attendance)]
      this.setState({
        cleanAttendance: clean
      })
      console.log(this.state.cleanAttendance)


    }
  }



  handleError(err) {
    console.error(err)
  }



  render() {
    if(this.state.result){
      return <Redirect to= '/success'/>
    }


    const previewStyle = {
      //height: 600,
      width: 400,
    }

    return (
      <div>
        <img className="brackets" src={pnkBrktL} style={{height: 100}} />
        <Layout>
          <Styles>
            <br />
              <h1>¡Bienvenida!</h1>
              <p>Por favor, escanea tu código QR</p>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
             // onScan={this.scanData}
              onScan={this.findDuplicate}
            />

            <h1>{this.state.result}</h1>
            {console.log (this.state.cleanAttendance)}
          </Styles>

        </Layout>
        <img className="brackets" src={pnkBrktR} style={styleRight} />
      </div>
    )
  }
}

export default Scanner; 