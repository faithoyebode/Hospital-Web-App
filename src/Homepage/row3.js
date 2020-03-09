import React, { Component } from 'react';
import { Row, Col,} from 'reactstrap';

class Row3 extends Component{
    render(){
      return (
        <Row className="my-5 row3">
            <Col md="9">
                <p>Make an appointment with one of our professional Doctors.</p>
                <p>Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas.</p>
            </Col>
            <Col md="3">
                <button className="head-button">
                    CALL NOW
                </button>
            </Col>
        </Row>
      );
    }
}
export default Row3;
