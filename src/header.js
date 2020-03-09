import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.div`
  width: 100%;
  height: 220px;
  background: ${props => `url(${props.imag})`};
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 25%  1%;
  background-attachment: fixed;
  padding-left: 8%;
`;
const Title = styled.span`
  font-size: 2.5rem;
  color: white;
  background-color: #32c69a;
  font-weight: 600;
  padding: 0px 20px;
  margin-top: 80px;
  height: 70px;
  display: inline-block;
  position: relative;
`;

class Header extends Component{
    render(){
      return (
          <div>
              <Head imag={this.props.image}>
                <Title>{this.props.title}</Title>
              </Head>
          </div>
      );
    }
}
export default Header;