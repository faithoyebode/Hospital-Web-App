import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import tabs from '../Images/tabs.jpg'


class Serv3 extends Component{
    render(){
      return (
          <Row className="mt-5">
              <Col lg='5'>
                  <div>
                      <div className="left" id="first-left">
                          <h5>Discuss</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipis voelta.</p>
                      </div>
                      <div className="left">
                          <h5>Create</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipis voelta.</p>
                      </div>
                      <div className="left">
                          <h5>Brainstorm</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipis voelta.</p>
                      </div>
                      <div className="left">
                          <h5>The Project</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipis voelta.</p>
                      </div>
                  </div>
              </Col>
              <Col lg="2">
                  <img src={tabs} alt="" />
              </Col>
              <Col lg="5" className="right-column">
                <div className="right-group">
                    <div className="right-item">
                        <h4>Cardiology</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuad.</p>
                    </div>
                    <div className="right-item">
                        <h4>Gastroenterology</h4>
                        <p>Donec malesuada lorem maximus mauris scele risque, at rutrum nulla dictum.</p>
                    </div>
                    <div className="right-item">
                        <h4>Medical Lab</h4>
                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                    </div>
                </div>
              </Col>
          </Row>
      )
    }
}

export default Serv3;