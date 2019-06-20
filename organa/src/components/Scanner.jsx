import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Layout } from './Layout';
import styled from "styled-components";
import pnkBrktR from '../assets/PinkBracketsRight.png';
import pnkBrktL from '../assets/PinkBracketsLeft.png';
import Success from "./Success";
import SendAttendanceToFirebase from './SendAttendanceToFirebase';
import Fail from './Fail';
import moment from 'moment';
import firebase from "../firebase/FirebaseConfig"

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
      scanner: [],
      showQRScanner: true
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
    if (data !== null) {
      const date = moment().format("ll");
      const dbRefAttendance = firebase.database().ref();
      const attendanceRef = dbRefAttendance.child("attendance").child(date);
      this.setState({ showQRScanner: false });
      let shouldInsert = true;

      attendanceRef
        .once("value", snap => {
          const dailyAttendance = Object.entries(snap.val());
          let studentIds = [];

          dailyAttendance.forEach(([id, value]) => {
            studentIds.push(value[0].total);
            console.log(studentIds)
          });
          shouldInsert = studentIds.includes(data) ? false : true;
        })
        .then(() => {
          if (shouldInsert) {
            this.setState({ result: "true" })
            attendanceRef.push([
              {
                total: data
              }
            ]);
          }else{
            this.setState({ result : "error"})
          }
        });
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

  handleShowQRScanner = () => this.setState({ showQRScanner: true });


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
                {this.state.showQRScanner ? (
                  <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.findDuplicate}
                  />
                ) : <button onClick={this.handleShowQRScanner}>Gracias!</button>}
            {/* <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.findDuplicate}
            /> */}
          </Styles>
        </Layout>
        <SendAttendanceToFirebase attendance={this.state.attendance}/>
        <img className="brackets" src={pnkBrktR} style={styleRight} alt="LabBrackets" />
      </div>
    )
  }
}

export default Scanner; 