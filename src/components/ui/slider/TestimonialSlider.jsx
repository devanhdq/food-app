import React from 'react';
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consequuntur deserunt
                    ducimus eligendi facere illo ipsa nam, perspiciatis quaerat suscipit totam, voluptatum! Dolorum eos
                    expedita placeat quas sapiente, sed?
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img
                        src={ava01}
                        alt="ava01..."
                        className="rounded"
                    />
                    <h6>John Doe</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consequuntur deserunt
                    ducimus eligendi facere illo ipsa nam, perspiciatis quaerat suscipit totam, voluptatum! Dolorum eos
                    expedita placeat quas sapiente, sed?
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img
                        src={ava02}
                        alt="ava02..."
                        className="rounded"
                    />
                    <h6>Anh Quang</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consequuntur deserunt
                    ducimus eligendi facere illo ipsa nam, perspiciatis quaerat suscipit totam, voluptatum! Dolorum eos
                    expedita placeat quas sapiente, sed?
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img
                        src={ava03}
                        alt="ava03..."
                        className="rounded"
                    />
                    <h6>Lucas V</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consequuntur deserunt
                    ducimus eligendi facere illo ipsa nam, perspiciatis quaerat suscipit totam, voluptatum! Dolorum eos
                    expedita placeat quas sapiente, sed?
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img
                        src={ava04}
                        alt="ava04..."
                        className="rounded"
                    />
                    <h6>Ronaldo</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;