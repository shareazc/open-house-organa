import React from 'react';
import moment from 'moment';
import styled from "styled-components";

const Styles = styled.div`
  h5 {
    margin-top: 30%;
  }
`;

export default function Date (){
    return <h5> {moment().format('lll')}</h5>
}