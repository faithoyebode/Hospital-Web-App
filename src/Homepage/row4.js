import React, { Component } from 'react';
import { Row, Col,} from 'reactstrap';
import icon1 from '../Images/icon_1.svg';
import icon2 from '../Images/icon_2.svg';
import icon3 from '../Images/icon_3.svg';
import icon4 from '../Images/icon_4.svg';
import icon5 from '../Images/icon_5.svg';
import icon6 from '../Images/icon_6.svg';


class Row4 extends Component{
    render(){
      return (
        <Row className="my-5 row4">
            <Col lg="12" className="my-5">
                <p className="text-center">Our Services</p>
                <p className="text-center">TO CHOOSE FROM</p>
            </Col>
            <Col lg="4" className="my-4">
                <img src={icon1} alt="cardiology"/>
                <span>Cardiolody</span>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lorem maximus malesuada lorem maximus mauris.</p>
            </Col>
            <Col lg="4" className="my-4">
            <img src={icon2} alt="gastroenterology"/>
                <span>Gastroenterology</span>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lorem maximus malesuada lorem maximus mauris.</p>
            </Col>
            <Col lg="4" className="my-4">
            <img src={icon3} alt="medical lab"/>
                <span>Medical Lab</span>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lorem maximus malesuada lorem maximus mauris.</p>
            </Col>
            <Col lg="4" className="my-4">
            <img src={icon4} alt="dental care"/>
                <span>Dental Care</span>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lorem maximus malesuada lorem maximus mauris.</p>
            </Col>
            <Col lg="4" className="my-4">
            <img src={icon5} alt="surgery"/>
                <span>Surgery</span>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lorem maximus malesuada lorem maximus mauris.</p>
            </Col>
            <Col lg="4" className="my-4">
            <img src={icon6} alt="neurology"/>
                <span>Neurology</span>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lorem maximus malesuada lorem maximus mauris.</p>
            </Col>
            <Col lg="12" className="my-4 d-flex justify-content-center">
                <button className="head-button">READ MORE</button>
            </Col>
        </Row>
      );
    }
}
export default Row4;