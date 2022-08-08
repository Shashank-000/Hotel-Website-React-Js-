import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from './carspic/slide1.jpg';
import slide2 from './carspic/slide2.jpg';
import slide3 from './carspic/slide3.jpg';
// import r4 from './carspic/r4.jfif';
const Slide=()=>
{
    return(
    <Carousel>
                <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                            height='200'
                            width='500'

                            />
                            <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Third slide"
                            height='200'
                            width='500'
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                            height='200'
                            width='500'
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
    )
}
export default Slide;