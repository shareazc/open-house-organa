import React, { Component } from 'react';
import FilterData from './FilterData'

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
    return (
     <div>  <FilterData FilterData={this.state.data}/>   </div>
    )
  }
}

export default Fetch; 