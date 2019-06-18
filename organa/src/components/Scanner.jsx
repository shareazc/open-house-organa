import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Layout } from './Layout';
import styled from "styled-components";
import pnkBrktR from '../assets/PinkBracketsRight.png';
import pnkBrktL from '../assets/PinkBracketsLeft.png';
import Success from "./Success";
import SendAttendanceToFirebase from './SendAttendanceToFirebase';
import Fail from './Fail';
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
      result: '', 
      attendance: [],
      scanner: []
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
      console.log(duplicateAttendance)
      console.log(data);
      if(duplicateAttendance[0] === data){
        this.setState({
          result: 'error'
        })
        console.log("error")
        console.log(this.state.attendance)
      }else{
        this.setState({
          attendance: [...this.state.attendance, this.state.scanner]
        })
        this.setState({
          result: "true"
        })
        console.log(this.state.attendance)
      }
      // this.setState({
      //   result: true
      // })
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
        //  this.findStudent(this.props.scanId, this.state.totalData)
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
          </Styles>
          {/* <Fetch scanId={this.state.scanner}/> */}
        </Layout>
        <SendAttendanceToFirebase attendance={this.state.attendance}/>
        <img className="brackets" src={pnkBrktR} style={styleRight} alt="LabBrackets" />
      </div>
    )
  }
}

export default Scanner; 