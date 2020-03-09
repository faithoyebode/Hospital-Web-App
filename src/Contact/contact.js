import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input} from 'reactstrap'
import './contact.css'
import Header from '../header';
import abt from '../Images/contact.jpg';

class Contact extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'Contact',
      image: abt
    }
  }
    render(){
      return (
          <div>
              <Header title={this.state.name} image={this.state.image}/>
              <Container>
               <Row>
                 <Col lg="8">
                   <Form className="my-5">
                     <h4>Get in touch</h4>
                     <FormGroup>
                        <Input type="text" className="contact-form" placeholder="Your Name"/>
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" className="contact-form" placeholder="Your Email"/>
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" className="contact-form" placeholder="Subject"/>
                      </FormGroup>
                      <FormGroup>
                        <Input type="textarea" className="contact-form" id="msg-area" placeholder="Message"/>
                      </FormGroup>
                      <FormGroup>
                        <input type="submit" className="contact-button" value="SEND MESSAGE" />
                      </FormGroup>
                   </Form>
                 </Col>
                 <Col lg="4">
                 <div className="row2-form my-5">
                        <Form>
                            <h4 className="py-4">Make an Appointment</h4>
                            <FormGroup>
                                <Input type="select" className="input" name="dept">
                                    <option>Department</option>
                                    <option>Department</option>
                                    <option>Department</option>
                                    <option>Department</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" className="input" name="doc">
                                    <option>Doctor</option>
                                    <option>Doctor</option>
                                    <option>Doctor</option>
                                    <option>Doctor</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" className="input" placeholder="Name"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" className="input" placeholder="Phone No"/>
                            </FormGroup>
                            <FormGroup>
                                <input type="submit" className="input-but" value="MAKE AN APPOINTMENT" />
                            </FormGroup>
                        </Form>
                    </div>
                 </Col>
               </Row>
               <Row className="last-row pt-4">
                 <Col lg="5" className="my-5">
                   <h3 className="mb-4">Contact Info</h3>
                   <p>Address: <span className="grey">Mitlton Str. 26-27 London UK</span></p>
                   <p>Email: <span className="grey">yourmail@gmail.com</span></p>
                   <p>Phone: <span className="grey">+53 345 7953 32453</span></p>
                 </Col>
                 <Col lg={{size: 4, offset: 3}} className="my-5">
                   <h3 className="mb-4">Opening Hours</h3>
                   <div className="d-flex justify-content-between">
                      <p className="grey">Monday-Thursday</p>
                      <p className="grey">8.00 - 19.00</p>
                   </div>
                   <div className="d-flex justify-content-between">
                      <p className="grey">Friday</p>
                      <p className="grey">8.00 - 18.30</p>
                   </div>
                   <div className="d-flex justify-content-between">
                      <p className="grey">Saturday</p>
                      <p className="grey">9.30 - 17.00</p>
                   </div>
                   <div className="d-flex justify-content-between">
                      <p className="grey">Sunday</p>
                      <p className="grey">9.30 - 15.00</p>
                   </div>  
                 </Col>
               </Row>
              </Container>
          </div>
      );
    }
}
export default Contact;