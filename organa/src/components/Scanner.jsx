import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import {Layout} from './Layout';
import styled from "styled-components";

const Styles = styled.div`
  .section {
    display: flex;
    
  }

  .section video {
    display: inline;
    justify-content: center;
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
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />
          <p>{this.state.result}</p>
        </Styles>
        </Layout>
      </div>
    )
  }
}

export default Scanner; 