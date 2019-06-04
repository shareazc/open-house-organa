import React from 'react';
import { Modal } from "react-bootstrap"
import check from '../assets/check-animation-v2.gif';
import styled from "styled-components";
import Fail from './Fail'

const Styles = styled.div`
    .modal-content{
        text-align: center;
    }
`

export default class ScanSuccessPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            data: [],
            totalStudents: 0,
            totalData : [],
            studentName: [],
            handleSuccess: false
        }
    }

    componentDidMount() {
        fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
        .then(response => response.json())
        .then(data => {
          const filterDataBase = data.filter(item =>
            item.role === 'student')
            this.setState({
              totalStudents: filterDataBase.length,
              totalData: filterDataBase
            })
            console.log(this.state.totalData)
            console.log(this.props.scanId)
              this.findStudent(this.props.scanId, this.state.totalData)
            return filterDataBase
        })
    
      }
    
      findStudent(id, data){
        const filterName = data.find(item =>
          item.id === id
          )
          if(filterName !== undefined){
            const name = filterName.name
            this.setState({
              studentName: name
            })
            return name
          }
          else{
            this.setState({
              studentName: "Fail"
            })
          }
      }
      
    render(){
      
        const finalName = this.state.studentName
        if (finalName != 'Fail'){
        return(
            <Styles>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title><h2>¡Bienvenida! <h4>{finalName}</h4></h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src= {check} alt="success" style={{height: 300}} />
                    <p>Tu asistencia ha sido registrada exitosamente.</p>
                </Modal.Body>

                <Modal.Footer>
                   
                </Modal.Footer>
            </Modal.Dialog>
            </Styles>
        )}
        
         return( <Fail></Fail>)
        
        
      }
}