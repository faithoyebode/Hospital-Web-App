import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './home.css';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';
import Row4 from './row4';
import Row5 from './row5';
import Row6 from './row6';

class Home extends Component{
  render(){
    return (
      <div>
          <Row1 />
          <Container>
            <Row2 />
          </Container>
          <Row3 />
          <Container>
            <Row4 />
          </Container>
          <Row5 />
          <Container>
            <Row6 />
          </Container>
      </div>
    );
  }
}

export default Home;
