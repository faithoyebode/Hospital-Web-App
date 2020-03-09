import React, { Component } from 'react';
import { Row, Col,} from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dept1 from '../Images/dept_1.jpg';
import dept2 from '../Images/dept_2.jpg';
import dept3 from '../Images/dept_3.jpg';
import dept4 from '../Images/dept_4.jpg';


class Row5 extends Component{
    state={
        responsive:{
            0: {items: 1},
            768: {items: 2},
            1024: {items: 3},
            1340: {items: 4},
        } 
    }

    render(){
      return (
        <Row className="my-5 row5">
            <Col md="12" className="my-5">
                <p className="text-center">Our Departments</p>
                <p className="text-center">TO CHOOSE FROM</p>
            </Col>
            <Col md="12" className="carousel-container">
                <OwlCarousel
                    className="owl-theme"
                    loop = "true"
                    autoplay = "true"
                    margin={30}
                    responsive = {this.state.responsive}
                    className="carousel"
                    ref="medical"
                >
                    <div className="item">
                        <img src={dept1} alt="Neonatology"/>
                        <div className="bg-white pb-4">
                            <h4 className="pt-4">Neonatology</h4>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className ="item">
                        <img src={dept2} alt="Dentistry"/>
                        <div className="bg-white pb-4">
                            <h4 className="pt-4">Dentistry</h4>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className ="item">
                        <img src={dept3} alt="Orthopedics"/>
                        <div className="bg-white pb-4">
                            <h4 className="pt-4">Orthopedics</h4>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className ="item">
                        <img src={dept4} alt="Laboratory"/>
                        <div className="bg-white pb-4">
                            <h4 className="pt-4">Laboratory</h4>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </OwlCarousel>
                <button onClick={() => this.refs.medical.next()}>></button>
            </Col>
        </Row>
      );
    }
}
export default Row5;