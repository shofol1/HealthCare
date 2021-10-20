import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/Slider/slide01-1.jpg";
import slider2 from "../../images/Slider/slide02.jpg";
import slider3 from "../../images/Slider/slide03.jpg";
import "./SliderSection.css";
const SliderSection = () => {
  return (
    <div className="height mx-auto">
      <div className="container ">
        <Carousel controls={false} indicators={false} interval={3000}>
          <Carousel.Item className="drk">
            <img className="d-block w-100 " src={slider1} alt="First slide" />
            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">Pain is weakness leaving the body</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="drk">
            <img className="d-block w-100" src={slider2} alt="Second slide" />

            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">A winner never whines</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="drk">
            <img className="d-block w-100" src={slider3} alt="Third slide" />

            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">Never Give Up</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default SliderSection;
