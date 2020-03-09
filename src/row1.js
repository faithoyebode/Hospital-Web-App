import React, { Component } from 'react';
import styled from 'styled-components';


const Coolstyle = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid grey;
`;
const Containerfluid = styled.div`
    display: flex;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;
const Contact = styled.div`
    display: inline-block;
    margin-left: auto;
    @media (max-width: 768px){
        display: none;
    }
`;

class Row1 extends Component{
    render(){
      return (
            <Coolstyle>
                <Containerfluid>
                    <p className="text-dark font-weight-bold navbar-brand">HEALTH<span className="text-success font-weight-bold">+</span></p>
                    <Contact>
                        <ul className="d-inline-block">
                            <li className="d-inline-block mx-3">Help Desk</li>
                            <li className="d-inline-block">|</li>
                            <li className="d-inline-block mx-3">Emergency Services</li>
                            <li className="d-inline-block">|</li>
                            <li className="d-inline-block mx-3">Appointment</li>
                        </ul>
                        <p className="font-weight-bold d-inline-block ml-5">+34 586 778 8892</p>
                    </Contact>
                </Containerfluid>  
            </Coolstyle>
        );
    }
  }
  
  export default Row1;