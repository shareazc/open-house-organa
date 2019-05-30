import React from 'react';
import moment from 'moment';

export default function Date (){
    return <h5> {moment().format('lll')}</h5>
}