import React from 'react';

import categoryImg1 from "../../../assets/images/category-01.png"
import categoryImg2 from "../../../assets/images/category-02.png"
import categoryImg3 from "../../../assets/images/category-03.png"
import categoryImg4 from "../../../assets/images/category-05.png"
import {Col, Container, Row} from "reactstrap";

const categoriesData = [
    {display: "Fast Food", imgUrl: categoryImg1},
    {display: "Pizza", imgUrl: categoryImg2},
    {display: "Asia Food", imgUrl: categoryImg3},
    {display: "Row Meat", imgUrl: categoryImg4},
]
const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoriesData.map((item, index) => (
                        <Col key={index} lg="3" md='4' sm='6'>
                            <div className="category__item">
                                <div className="category__img">
                                    <img src={item.imgUrl} alt="category__item"/>
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Category;