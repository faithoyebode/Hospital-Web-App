import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Gal1 from '../Images/doc_1.jpg';
import Gal2 from '../Images/doc_2.jpg';
import Gal3 from '../Images/doc_3.jpg';
import Gal4 from '../Images/doc_4.jpg';
import Gal5 from '../Images/doc_5.jpg';
import Gal6 from '../Images/doc_6.jpg';
import Gal7 from '../Images/doc_7.jpg';
import Gal8 from '../Images/doc_8.jpg';
import Doctors from '../Images/doctors.jpg';

class Abt4 extends Component{
    render(){
      return (
          <Row>
              <Col lg="12">
                <div className="top">
                    <p>Our Doctors</p>
                    <p>TO CHOOSE FROM</p>
                </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal1} alt="Michael Smith"/>
                      <p className="name pl-3 mt-3">Michael Smith</p>
                      <p className="duty mt-n2 pl-3">Surgeon</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal2} alt="Christian Williams"/>
                      <p className="name pl-3 mt-3">Christian Williams</p>
                      <p className="duty mt-n2 pl-3">Surgeon</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal3} alt="Jessica Walsh"/>
                      <p className="name pl-3 mt-3">Jessica Walsh</p>
                      <p className="duty mt-n2 pl-3">Surgeon</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal4} alt="Martha James"/>
                      <p className="name pl-3 mt-3">Martha James</p>
                      <p className="duty mt-n2 pl-3">Surgeon</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal5} alt="Tom Chandler"/>
                      <p className="name pl-3 mt-3">Tom Chandler</p>
                      <p className="duty mt-n2 pl-3">Surgeon</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal6} alt="Michael Smith"/>
                      <p className="name pl-3 mt-3">Emily Rhodes</p>
                      <p className="duty mt-n2 pl-3">Laboratory</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal7} alt="Michael Smith"/>
                      <p className="name pl-3 mt-3">Maggie Bells</p>
                      <p className="duty mt-n2 pl-3">Pediatrist</p>
                  </div>
              </Col>
              <Col lg="3" md="6" className="mb-5">
                  <div className="gallery">
                      <img src={Gal8} alt="Frank Walter"/>
                      <p className="name pl-3 mt-3">Frank Walter</p>
                      <p className="duty mt-n2 pl-3">Eye Doctor</p>
                  </div>
              </Col>
              <Col lg="12" className="my-5 d-flex justify-content-center">
                <button className="call-now d-inline-block">SEE ALL DOCTORS</button>
              </Col>
              <Col lg="12" className="mt-5 mb-n5 d-flex justify-content-center">
                  <img src={Doctors} alt="All Doctors" />
              </Col>
          </Row>
      )
    }
}

export default Abt4;