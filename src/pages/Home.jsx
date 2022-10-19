import React from 'react';
import {Col, Container, Row} from "reactstrap";
import heroImg from "../assets/images/hero.png"
import "../styles/hero-section.css"
import {Link} from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";


const Home = () => {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md="6">
                            <div className="hero__content">
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className="mb-4 hero__title"><span>HUNGRY?</span> Just wait <br/> food at<span> your door</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi explicabo
                                    fuga
                                    laboriosam nobis officia qui? Atque commodi dolorem eum!</p>
                                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                    <button
                                        className="order__btn d-flex align-items-center justify-content-center">Order
                                        Now &ensp;
                                        <i className="ri-arrow-right-circle-line"></i>
                                    </button>

                                    <button className="all__foods-btn ">
                                        <Link to="/foods">See all foods</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="hero__service d-flex align-items-center gap-5 mt-5">
                                <p className="d-flex align-items-center gap-2">
                                <span className="shipping__icon">
                                    <i className="ri-car-line"></i>
                                </span>
                                    No shipping charge
                                </p>

                                <p className="d-flex align-items-center gap-2">
                                <span className="shipping__icon">
                                <i className="ri-shield-check-line"></i>
                                </span>
                                    100% secure
                                </p>
                            </div>
                        </Col>
                        <Col lg='6' md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="Hero Images..." className="w-100"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;