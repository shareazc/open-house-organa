import React from 'react';
import Attendance from './Attendance'
import Absence from './Absence'


class Summary extends React.Component{
    render(){
        return(
            <div>
                <h1><Attendance/></h1>
                <h2><Absence/></h2>
            </div>
        )
    }
}

export default Summary;

