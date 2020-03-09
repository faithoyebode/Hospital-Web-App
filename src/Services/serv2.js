import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Serv2 extends Component{
    render(){
      return (
          <Row className="pb-5">
              <Col lg="4" className="pic-section1 pic-group">
                  <div>
                    <h2>Our Vision</h2>
                    <p>Take a look</p>
                    <p className='my-5'>
                        Maximus malesuada lorem max imus mauris. Proin vitae tortor nec risus tristiq ue efficitur. 
                        Aliquam luctus est urna, id aliqu am orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. 
                        Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris.
                    </p>
                    <button className='read mt-5'>READ MORE</button>
                  </div>
              </Col>
              <Col lg="4" className="pic-section2 pic-group">
                    <div>
                        <h2>Our Center</h2>
                        <p>Take a look</p>
                        <p className='my-5'>
                            Maximus malesuada lorem max imus mauris. Proin vitae tortor nec risus tristiq ue efficitur. 
                            Aliquam luctus est urna, id aliqu am orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. 
                            Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris.
                        </p>
                        <button className='read mt-5'>READ MORE</button>
                    </div>
              </Col>
              <Col lg="4" className="pic-section3 pic-group">
                    <div>
                        <h2>Our Mission</h2>
                        <p>Take a look</p>
                        <p className='my-5'>
                            Maximus malesuada lorem max imus mauris. Proin vitae tortor nec risus tristiq ue efficitur. 
                            Aliquam luctus est urna, id aliqu am orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. 
                            Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris.
                        </p>
                        <button className='read mt-5'>READ MORE</button>
                    </div>
              </Col>
          </Row>
      )
    }
}

export default Serv2;