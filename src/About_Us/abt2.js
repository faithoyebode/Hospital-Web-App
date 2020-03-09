import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import days from '../Images/icon_7.svg';
import patients from '../Images/icon_6.svg';
import doctors from '../Images/icon_8.svg';
import lab from '../Images/icon_9.svg';

class Abt2 extends Component{

    render(){
        return (
            <Row className="mt-5">
                <Col lg="3"className="d-flex">
                    <img src={days} alt="Days" className="counter-icon"/>
                    <div>
                        <p>365</p>
                        <p>Days a year</p>
                    </div>
                </Col>
                <Col lg="3"className="d-flex">
                    <img src={patients} alt="Patients" className="counter-icon"/>
                    <div>
                        <p>25K</p>
                        <p>Patients a year</p>
                    </div>
                </Col>
                <Col lg="3"className="d-flex">
                    <img src={doctors} alt="Amazing Doctors" className="counter-icon"/>
                    <div>
                        <p>125</p>
                        <p>Amazing Doctors</p>
                    </div>
                </Col>
                <Col lg="3"className="d-flex">
                    <img src={lab} alt="Lab Results" className="counter-icon"/>
                    <div>
                        <p>12K</p>
                        <p>Lab Results</p>
                    </div>
                </Col>

            </Row>
        )
    }
}
export default Abt2;