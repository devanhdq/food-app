import React from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";

import "./footer.css"
import logo from "../../assets/images/res-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="logo footer__logo text-start">
                            <img src={logo} alt="Logo..."/>
                            <h5 className="footer__title">Tasty Treat</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos iste maiores quasi
                                veritatis. Dolorum laborum magni quisquam repudiandae velit.</p>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5>Delivery Time</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span> Sunday - Thursday</span>
                                <p>10:00 - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span> Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>

                    </Col>
                    <Col lg='3' md='4' sm='6'>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;