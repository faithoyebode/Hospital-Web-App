import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Header from '../header'
import './news.css'
import abt from '../Images/news.jpg'
import blogImg1 from '../Images/news_1.jpg'
import blogImg2 from '../Images/news_2.jpg'
import blogImg3 from '../Images/news_3.jpg'
import blog1 from '../Images/latest_1.jpg'
import blog2 from '../Images/latest_2.jpg'
import blog3 from '../Images/latest_3.jpg'

class News extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'News',
      image: abt
    }
  }
    render(){
      return (
          <div>
              <Header title={this.state.name} image={this.state.image}/>
              <Container>
                <Row className="my-5">
                  <Col lg="8" className="mb-5">
                    <div className='each-post mt-5'>
                      <img src={blogImg1} className="img-fluid" alt="first blog image"/>
                      <p className="mt-5 mb-3 blog-date">17 April 2018</p>
                      <h2>10 Tips on how to live a healthy life</h2>
                      <p>by Jane Smith / April 25, 2018 /</p>
                      <p className="mt-3 mb-5">
                        Donec lorem maximus malesuada lorem max imus mauris. 
                        Proin vitae tortor nec risus tristiq ue efficitur. 
                        Aliquam luctus est urna, id aliqu am orci tempus sed. 
                        Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, 
                        tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. 
                        Proin sed urna mauris.
                      </p>
                      <button className="head-button mb-4">READ MORE</button>
                    </div>
                    <div className='each-post mt-5'>
                      <img src={blogImg2} className="img-fluid" alt="second blog image"/>
                      <p className="mt-5 mb-3 blog-date">17 April 2018</p>
                      <h2>New lab tests that could save your life</h2>
                      <p>by Jane Smith / April 25, 2018 /</p>
                      <p className="mt-3 mb-5">
                        Donec lorem maximus malesuada lorem max imus mauris. 
                        Proin vitae tortor nec risus tristiq ue efficitur. 
                        Aliquam luctus est urna, id aliqu am orci tempus sed. 
                        Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, 
                        tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. 
                        Proin sed urna mauris.
                      </p>
                      <button className="head-button mb-4">READ MORE</button>
                    </div>
                    <div className='each-post mt-5'>
                      <img src={blogImg3} className="img-fluid" alt="third blog image"/>
                      <p className="mt-5 mb-3 blog-date">17 April 2018</p>
                      <h2>Maternity can be a wonderful thing</h2>
                      <p>by Jane Smith / April 25, 2018 /</p>
                      <p className="mt-3 mb-5">
                        Donec lorem maximus malesuada lorem max imus mauris. 
                        Proin vitae tortor nec risus tristiq ue efficitur. 
                        Aliquam luctus est urna, id aliqu am orci tempus sed. 
                        Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, 
                        tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. 
                        Proin sed urna mauris.
                      </p>
                      <button className="head-button mb-5">READ MORE</button>
                    </div>
                  </Col>
                  <Col lg="4" className="right-section my-5 pl-3">
                    <div className="mb-5">
                      <Form className="mb-5">
                        <Input type="text" placeholder="Search" className="search"/>
                      </Form>
                    </div>
                    <h3 className="my-4 categories-head">Latest News</h3>
                    <div className="my-5 pb-5 d-flex latest-news">
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
                            <p>A new way to see things</p>
                            <p>by Jane Smith / April 25, 2018</p>
                            <p>2 Comments</p>
                          </div>
                      </div>
                      <div className="d-flex flex-nowrap">
                          <img src={blog3} alt="third blog image" className="blog-image"/>
                          <div className="blog-contents">
                            <div className="d-flex flex-nowrap">
                            <p id="pharma">Why is Pharma industry so big?</p>
                            </div>
                            <p>by Jane Smith / April 25, 2018</p>
                            <p>2 Comments</p>
                          </div>
                      </div>
                    </div>
                    <h3 className="my-4 categories-head">Categories</h3>
                    <div className="categories mb-5">
                      <div className="categories-child d-flex">
                        <p className="flex-grow-1">Medicine</p>
                        <p className="align-self-end">(11)</p>
                      </div>
                      <div className="categories-child d-flex">
                        <p className="flex-grow-1">Pharmacy</p>
                        <p className="align-self-end">(23)</p>
                      </div>
                      <div className="categories-child d-flex">
                        <p className="flex-grow-1">Uncategorized</p>
                        <p className="align-self-end">(6)</p>
                      </div>
                      <div className="categories-child d-flex">
                        <p className="flex-grow-1">Doctors</p>
                        <p className="align-self-end">(9)</p>
                      </div>
                      <div className="categories-child d-flex">
                        <p className="flex-grow-1">Innovation</p>
                        <p className="align-self-end">(15)</p>
                      </div>
                    </div>
                    <div className="row2-form pt-5">
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
              </Container>
          </div>
      );
    }
}
export default News;