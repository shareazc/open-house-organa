import React from 'react';
import { Redirect } from 'react-router-dom';

export default class ScanSuccessPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        setTimeout(()=> this.setState({redirect: true}), 3000)    
    }
    render(){
        if (this.state.redirect){
            return <Redirect to="/"/>
        }
        return <h1> Tu codigo ha sido reconocido exitosamente </h1>
    }
   
}