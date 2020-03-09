import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card} from 'reactstrap';
import blog1 from '../Images/latest_1.jpg';
import blog2 from '../Images/latest_2.jpg';
import blog3 from '../Images/latest_3.jpg';

class Row6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpenA: true,
            isOpenB: false,
            isOpenC: false
        }
    }
    toggleA = e => {
        e.preventDefault();
        this.setState({isOpenA: !this.state.isOpenA});
    }
    toggleB = e => {
        e.preventDefault();
        this.setState({isOpenB: !this.state.isOpenB});
    }
    toggleC = e => {
        e.preventDefault();
        this.setState({isOpenC: !this.state.isOpenC});
    }

    render(){
      return (
          <Row className="row6">
              <Col lg="7">
                  <div className="my-5">
                      <p className="row6-heading">Faq & Stuff</p>
                      <p>READ ALL ABOUT IT</p>
                  </div>
                  <div className="my-5">
                      <div className="mb-3">
                          <button onClick={this.toggleA}>
                              <span className="plus">+</span>
                              <span className="coplus">Maecenas fermentum tortor id fringilla molestie.</span>
                          </button>
                          <Collapse isOpen={this.state.isOpenA}>
                              <Card className="cardbody">
                                  <CardBody>
                                    Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. 
                                    Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.
                                  </CardBody>
                              </Card>
                          </Collapse>
                      </div>
                      <div className="mb-3">
                          <button onClick={this.toggleB}>
                              <span className="plus">+</span>
                              <span className="coplus">Duis quis lacinia elit. Etiam varius mi eget lacus ultricies elementum</span>
                          </button>
                          <Collapse isOpen={this.state.isOpenB}>
                              <Card className="cardbody">
                                  <CardBody>
                                    Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. 
                                    Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.
                                  </CardBody>
                              </Card>
                          </Collapse>
                      </div>
                      <div className="mb-3">
                          <button onClick={this.toggleC}>
                              <span className="plus">+</span>
                              <span className="coplus">Maecenas fermentum tortor id fringilla molestie.</span>
                          </button>
                          <Collapse isOpen={this.state.isOpenC}>
                              <Card className="cardbody">
                                  <CardBody>
                                    Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. 
                                    Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.
                                  </CardBody>
                              </Card>
                          </Collapse>
                      </div>
                  </div>
              </Col>
              <Col lg="5">
                  <div className="my-5">
                      <p className="row6-heading">Latest News</p>
                      <p>READ ALL ABOUT IT</p>
                  </div>
                  <div className="d-flex my-5 latest-news">
                      <div className="d-flex mb-2">
                          <img src={blog1} alt="first blog image" className="blog-image"/>
                          <div className="blog-contents">
                            <p>A simple blog post</p>
                            <p>by Jane Smith / April 25, 2018</p>
                            <p>2 Comments</p>
                          </div>
                      </div>
                      <div className="d-flex mb-2">
                          <img src={blog2} alt="second blog image" className="blog-image"/>
                          <div className="blog-contents">
                            <p>A new way to see things in medicine</p>
                            <p>by Jane Smith / April 25, 2018</p>
                            <p>2 Comments</p>
                          </div>
                      </div>
                      <div className="d-flex">
                          <img src={blog3} alt="third blog image" className="blog-image"/>
                          <div className="blog-contents">
                            <p>Why is Pharma industry so big?</p>
                            <p>by Jane Smith / April 25, 2018</p>
                            <p>2 Comments</p>
                          </div>
                      </div>
                  </div>
              </Col>
          </Row>
      );
    }
}
export default Row6;