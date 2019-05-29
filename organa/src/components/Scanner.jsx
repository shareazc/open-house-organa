import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import {Layout} from './Layout';
import styled from "styled-components";

const Styles = styled.div`
  * {
    margin-top: 2rem;
    margin: auto;
    text-align: center;
  }
  
`;
 
class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
   
  
  render(){
    
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
        <Layout>
          <Styles>
            <br/>
              <h1>¡Bienvenida!</h1>
              <p>Por favor, escanea tu código QR</p>
          <QrReader 
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />
          <h1>{this.state.result}</h1>
          {console.log(this.state.result)}
        </Styles>
        </Layout>
      </div>
    )
  }
}

export default Scanner; 