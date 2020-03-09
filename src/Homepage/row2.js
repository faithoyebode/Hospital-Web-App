import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import img1 from '../Images/info_1.jpg';
import img2 from '../Images/info_2.jpg';

class Row2 extends Component{
    render(){
      return (
            <Row className="py-5">
                <Col lg="4" className="py-3">
                    <img src={img1} className="img-fluid pb-3"/>
                    <p className="my-4 row2-h1">Free Consultations</p>
                    <p className="row2-p1">Arcu neque, scelerisque eget ligula ac, congue tempor felis. 
                        Integer tempor, eros a egestas finibus, dolor risus mollis.</p>
                    <button className="head-button">READ MORE</button>
                </Col>
                <Col lg="4" className="py-3">
                    <img src={img2} className="img-fluid pb-3"/>
                    <p className="my-4 row2-h1">Emergency Care</p>
                    <p className="row2-p1">Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. 
                        Integer tempor, eros a egestas finibus, dolor risus.</p>
                    <button className="head-button">READ MORE</button>
                </Col>
                <Col lg="4" className="side-form my-3">
                    <div className="row2-form">
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
        );
    }
}
  
export default Row2;