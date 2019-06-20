import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Layout } from './Layout';
import styled from "styled-components";
import pnkBrktR from '../assets/PinkBracketsRight.png';
import pnkBrktL from '../assets/PinkBracketsLeft.png';
import help from '../assets/information.svg';
import Success from "./Success";
import SendAttendanceToFirebase from './SendAttendanceToFirebase';

import Fail from './Fail';
import Popover from 'react-bootstrap/Popover';
import { OverlayTrigger } from 'react-bootstrap';

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

const helpIcon = {
  height: '8vh',
  display: 'block',
  margin: 'auto'
}

const popover = (
  <Popover id="popover-basic" title="¿Necesitas ayuda?">
      
      <p>- Coloca el código lo más paralelo posible a la cámara.</p> 
      <p>- Limpia y sube el brillo a la pantalla del smartphone.</p> 
      <p>- Verifica que el código que escaneas sea correcto.</p><br />
      
      <p><strong>Si el error persiste, busca a unx coach.</strong></p>
  </Popover>
);

const Info = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <img className="info" src={help} style={helpIcon} alt="help"></img>
  </OverlayTrigger>
);


class Scanner extends Component {
  constructor(props) {
    super(props)
    this.state = {

      delay: 500,
      result: '', 
      attendance: [],
      scanner: [],
      totalData: []
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
      let duplicateAttendance = this.state.attendance.filter(e =>
        data === e
      ) 

      const findThirdPartyCode = this.state.totalData.find(item =>
        item.id===data
        )
      if(duplicateAttendance[0] === data || findThirdPartyCode === undefined){
        this.setState({
          result: 'error'
        })
        }else{
          this.setState({
            attendance: [...this.state.attendance, this.state.scanner]
          })
          console.log(this.state.attendance)
          this.setState({
            result: "true"
          })
       }
    }
  }



  handleError(err) {
    console.error(err)
  }

  componentDidMount() {
    fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
    .then(response => response.json())
    .then(data => {
      const filterDataBase = data.filter(item =>
        item.role === 'student')
        this.setState({
          totalData: filterDataBase
        })
        return filterDataBase
    })

  }


  render() {
    if(this.state.result === "true"){
      setTimeout(()=> this.setState({result: "false"}), 3000)    

      return <Success scanId={this.state.scanner}/>
    }else if(this.state.result === "error"){
      setTimeout(()=> this.setState({result: "false"}), 3000)    
      return <Fail />
    }


    const previewStyle = {
      //height: 600,
      width: 400,
    }

    return (
      <div className="scannerScreen">
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
          </Styles>
        </Layout>
        <SendAttendanceToFirebase attendance={this.state.attendance}/>
        
        <img className="brackets" src={pnkBrktR} style={styleRight} alt="LabBrackets" />
        
      </div>
    )
  }
}

export default Scanner; 