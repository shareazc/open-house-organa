import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {

      data: []
    }
  }
  componentDidMount() {
    fetch('https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: [...data]
      })  
    });



  }

  render() {
    console.log(this.state.data)

    return (
     <div>      </div>
    )
  }
}

export default Fetch; 