import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import abt from '../Images/about.jpg';
import './about.css';
import Abt1 from './abt1';
import Abt2 from './abt2';
import Abt3 from '../Homepage/row3'
import Abt4 from './abt4';


class About extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'About Us',
      image: abt
    }
  }
    render(){
      return (
          <div>
              <Header title={this.state.name} image={this.state.image}/>
              <Container>
                <Abt1 />
                <Abt2 />
              </Container>
              <Abt3 />
              <Container>
                <Abt4 />
              </Container>  
          </div>
      ); 
    }
}
export default About;