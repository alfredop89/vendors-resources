import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../scss/Slick.scss";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>

        <div className="view">
          <Link to="/technnical-data">
            <h3>Technical Data</h3>
          </Link>
        </div>

        <div className="view-2">
          <Link to="/photo-bank">
          <h3>Photo Bank</h3>
          </Link>
          
        </div>

        <div className="view-3">
          <Link to="/merch">
            <h3>Merch</h3>
          </Link>
        </div>

    </Slider>
  );
}
