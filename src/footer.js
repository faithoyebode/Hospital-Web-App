import React, { Component } from 'react';
import { Row, Col, Form, Input, FormGroup, CardBody, Card} from 'reactstrap';

class Footer extends Component{
    render(){
      return (
          <Row className="footer">
              <Col lg="3" className="mb-10">
                  <p className="health">HEALTH<span>+</span></p>
                  <p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
              </Col>
              <Col lg="5" className="mb-10 pneg">
                  <Col lg="12">
                    <p className="quick">Quick Contact</p>
                  </Col>
                  <Form>
                  <Col lg="12" className="first-inputs">
                      <input type="text" name="footer-name" placeholder="Name" className="one top"/>
                      <input type="text" name="footer-email" placeholder="Email" className="two top"/>
                  </Col>
                  <Col lg="12">
                    <Input type="textarea" name="footer-message" placeholder="Message" className="message"/>
                  </Col>
                  <Col lg="12">
                    <Input type="submit" value="SEND MESSAGE" name="footer-submit" className="submit"/>
                  </Col>
                  </Form>    
              </Col>
              <Col lg="4">
                  <div className="time">
                    <p className="quick">Opening Hours</p>
                    <div className="d-flex tt">
                      <p>Monday – Thursday </p>
                      <p>8.00 – 19.00</p>
                    </div>
                    <div className="d-flex tt">
                      <p>Friday</p>
                      <p>8.00 - 18.30</p>
                    </div>
                    <div className="d-flex tt">
                      <p>Saturday</p>
                      <p>9.30 – 17.00</p>
                    </div>
                    <div className="d-flex tt">
                      <p>Sunday </p>
                      <p> 9.30 – 15.00</p>
                    </div>
                  </div>
              </Col>
          </Row>
      );
    }
}
export default Footer;