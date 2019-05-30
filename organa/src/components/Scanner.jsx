import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Layout } from './Layout';
import styled from "styled-components";

const Styles = styled.div`
  * {
    margin-top: 2rem;
    margin: auto;
    text-align: center;
  }
  
`;

class Scanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 1000,
    /*   result: 'No result', */
      attendance: [],
      scanner: [],
      cleanAttendance: []
    }

   /*  this.scanData = this.scanData.bind(this) */
    this.findDuplicate = this.findDuplicate.bind(this)
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

    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <div>
        <Layout>
          <Styles>
            <br />
            <div className="title">
              <h1>¡Bienvenida!</h1>
              <p>Por favor, escanea tu código QR</p>
            </div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
             // onScan={this.scanData}
              onScan={this.findDuplicate}
            />
            <h1>{this.state.result}</h1>

          </Styles>
        </Layout>
      </div>
    )
  }
}

export default Scanner; 