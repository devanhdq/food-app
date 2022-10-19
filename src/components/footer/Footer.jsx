import React from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";

import "./footer.css"
import logo from "../../assets/images/res-logo.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (<footer className="footer">
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
                    <h5>Contact</h5>
                    <ListGroup className="delivery__time-list">
                        <ListGroupItem className="delivery__time-item border-0 ps-0">
                            <span> Phone : +84 000 000</span>
                        </ListGroupItem>
                        <ListGroupItem className="delivery__time-item border-0 ps-0">
                            <span>Gmail: foodapp@gmail.com</span>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <h5>Location</h5>
                    <ListGroup className="delivery__time-list">
                        <ListGroupItem className="delivery__time-item border-0 ps-0">
                            <span> Thu Duc City</span>
                        </ListGroupItem>

                        <ListGroupItem className="delivery__time-item border-0 ps-0">
                            <span>An Khanh, Thu Duc, TP HCM</span>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col lg="6" md="6">
                    <p>Anh Quang | Food App</p>
                </Col>
                <Col lg="6" md="6">
                    <div className="social__link">
                        <p>Follow:</p>
                        <span>
                            <Link to="https://www.facebook.com/anhquangdt/">
                                <i className="ri-facebook-fill"></i>
                            </Link>
                            </span>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>);
};

export default Footer;