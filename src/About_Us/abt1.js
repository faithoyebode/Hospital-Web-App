import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Doc from '../Images/about_1.jpg'

class Abt1 extends Component{
    render(){
      return (
          <Row>
              <Col lg='12' className="my-5">
                  <div className="top">
                    <p>A few words about us</p>
                    <p>TO CHOOSE FROM</p>
                  </div>
              </Col>
              <Col lg='4'>
                <p className="logo">Health<span className="plus">+</span></p>
                <p className="logo-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem max imus mauris.
                </p>
                <p>
                    Aenean sit amet leo id enim dapibus eleifend. Phas ellus ut erat dapibus, tempor sapien non, porta
                </p>
              </Col>
              <Col lg='4' className="mt-3">
                  <p className="logo-rider">
                    Donec lorem maximus malesuada lorem max imus mauris. Proin vitae tortor nec risus tristiq ue efficitur. 
                    Aliquam luctus est urna, id aliqu am orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. 
                    Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. 
                    Proin sed urna mauris.
                  </p>
                  
              </Col>
              <Col lg={{size: 3, offset: 1}}>
                  <img src={Doc} alt="Doctor and little patient" className="top-image"/>
              </Col>
              <Col lg="12" className="mt-3 d-flex justify-content-center">
                <button className="call-now d-inline-block">CALL NOW</button>
              </Col>
          </Row>
      )
    }
}

export default Abt1;