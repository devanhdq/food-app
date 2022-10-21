import React, {useEffect, useState} from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import heroImg from "../assets/images/hero.png";
import {Link} from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import Category from "../components/ui/category/Category";
import ProductCard from "../components/ui/product-card/ProductCard";


import featureImg1 from "../assets/images/service-01.png";
import featureImg2 from "../assets/images/service-02.png";
import featureImg3 from "../assets/images/service-03.png";

import foodCategory1 from "../assets/images/hamburger.png"
import foodCategory2 from "../assets/images/pizza.png";
import foodCategory3 from "../assets/images/bread.png";

import "../styles/hero-section.css";
import "../styles/home.css";

import products from "../assets/fake-data/products";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/ui/slider/TestimonialSlider";

const featureData = [
    {title: "Quick delivery", imgUrl: featureImg1, desc: "Lorem ipsum dolor sit amet!"},
    {title: "Super Dine In", imgUrl: featureImg2, desc: "Super Dine In Description"},
    {title: "Easy pick up", imgUrl: featureImg3, desc: "Easy pick up description "}
]

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        switch (category) {
            case "BURGER":
                const hamburgerProducts = products.filter(item => item.category === "Burger");
                setAllProducts(hamburgerProducts)
                break;
            case "PIZZA":
                const pizzaProducts = products.filter(item => item.category === "Pizza");
                setAllProducts(pizzaProducts)
                break;
            case "BREAD":
                const breadProducts = products.filter(item => item.category === "Bread");
                setAllProducts(breadProducts)
                break;
            default :
                setAllProducts(products);
        }

    }, [category]);
    useEffect(() => {
        const filterPizza = products.filter(item => item.category === 'Pizza');
        const slicePizza = filterPizza.slice(0, 4)
        setHotPizza(slicePizza);
    }, [])

    return (<Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg='6' md="6">
                        <div className="hero__content">
                            <h5 className="mb-3">Easy way to make an order</h5>
                            <h1 className="hero__title mb-4"><span>HUNGRY?</span> Just wait <br/> food at<span> your door</span>
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

        <section className="pt-0">
            <Category/>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center ">
                        <h5 className="feature__subtitle mb-4">What we serve</h5>
                        <h2 className="feature__title">Just sit back at home</h2>
                        <h2 className="feature__title">we will <span>take care</span></h2>
                        <p className="mb-1 mt-4 feature__text">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium aspernatur, culpa
                            harum optio vel velit!</p>
                        <p className="feature__text">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium aspernatur, culpa
                            harum optio vel velit!</p>
                    </Col>

                    {featureData.map((item, index) => (
                        <Col lg='4' md='4' sm='6' key={index} className="mt-5">
                            <div className="feature__item text-center px-5 py-3">
                                <img
                                    src={item.imgUrl}
                                    alt="Image Feature Item"
                                    className="w-25 mb-3"
                                />
                                <h5 className="fw-bold mb-3">
                                    {item.title}
                                </h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2>Popular Food</h2>
                    </Col>
                    <Col lg='12'>
                        <div className="food__category d-flex align-items-center justify-content-center gap-5">
                            <button
                                className={`all_btn ${category === "ALL" ? "foodBtnActive" : ""}`}
                                onClick={() => setCategory("ALL")}
                            >All
                            </button>
                            <button

                                className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""}`}
                                onClick={() => setCategory("BURGER")}
                            >
                                <img src={foodCategory1} alt="Hamburger..."/>Hamburger
                            </button>
                            <button
                                className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""}`}
                                onClick={() => setCategory("PIZZA")}

                            >
                                <img src={foodCategory2} alt="Pizza..."/>Pizza
                            </button>
                            <button
                                className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : ""}`}
                                onClick={() => setCategory("BREAD")}
                            >
                                <img src={foodCategory3} alt="Bread..."/>Bread
                            </button>
                        </div>
                    </Col>
                    {allProducts.map(item => (<Col key={item.id} lg='3' md="4" className="mt-5">
                        <ProductCard
                            item={item}
                        />
                    </Col>))}
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img
                            src={whyImg}
                            alt="Location..."
                            className="w-100"
                        />
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="why__tasty-treat">
                            <h2 className="tasty__treat-title mb-4">
                                Why <span>  tasty Treat?</span>
                            </h2>
                            <p className="tasty__treat-desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur commodi cupiditate
                                dolor dolores esse excepturi, impedit maxime modi nam natus perferendis sed tenetur
                                vero. Hic maxime nihil repellat tempora voluptatem.
                            </p>
                            <ListGroup className="mt-5">
                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose_us-title d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-circle-line"></i>
                                        Fresh and tasty foods
                                    </p>
                                    <p className="choose_us-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ducimus, eligendi.</p>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose_us-title d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-circle-line"></i>
                                        Quantity support
                                    </p>
                                    <p className="choose_us-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ducimus, eligendi.</p>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose_us-title d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-circle-line"></i>
                                        Order from any location
                                    </p>
                                    <p className="choose_us-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ducimus, eligendi.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2>Hot Pizza</h2>
                    </Col>
                    {hotPizza.map(item => (
                        <Col lg='3' md='4' key={item.id}>
                            <ProductCard item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="testimonial">
                            <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                            <h2 className="testimonial__title mb-4">What our <span>customer</span> are saying</h2>
                            <p className="testimonial__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusantium ad animi eius porro
                                provident, quo quod. Asperiores et harum ipsum labore libero molestiae nemo
                                perspiciatis, provident, quia quis saepe, voluptatem.
                            </p>
                            <TestimonialSlider/>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <img
                            src={networkImg}
                            alt="Network image..."
                            className="w-100"
                        />
                    </Col>

                </Row>
            </Container>
        </section>


    </Helmet>);
};

export default Home;