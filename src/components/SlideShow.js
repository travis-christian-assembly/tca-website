import React, { Component } from 'react'
import Slider from 'react-slick'
import slide1 from 'assets/images/slide-20200306.jpg'
import slide2 from 'assets/images/slide-20191016.jpg'

export default class SlideShow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img style={{ width: '100%' }} src={slide1} alt="slide1" />
          </div>
          <div>
            <img style={{ width: '100%' }} src={slide2} alt="slide2" />
          </div>
        </Slider>
      </div>
    );
  }
}
