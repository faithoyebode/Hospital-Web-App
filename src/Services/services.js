import React, { Component } from 'react'
import { Container } from 'reactstrap'
import './services.css'
import Header from '../header'
import abt from '../Images/services.jpg'
import Serv1 from '../Homepage/row4'
import Serv2 from './serv2'
import Serv3 from './serv3'

class Services extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'Services',
      image: abt
    }
  }
    render(){
      return (
          <div>
              <Header title={this.state.name} image={this.state.image}/>
              <Container>
                <Serv1 />
              </Container>
              <Serv2 />
              <Container>
                <Serv3 />
              </Container>
          </div>
      );
    }
}
export default Services;