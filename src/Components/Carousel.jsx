import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '/src/assets/img1.jpg';
import img2 from '/src/assets/img2.jpg';
import img5 from '/src/assets/img5.jpg';
import './Carousel.css';

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '90vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif',}}>WHO WE ARE</h1>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}>Welcome to FarmFriend Connect - Your Farming Companion</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '90vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Our Vision</h1>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Is to create awareness related to Farming Techniques and Technology in the farmers' community</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '90vh' }}
            className="d-block w-100"
            src={img5}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
          <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Get Started Today</h1>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Join Thousands of Farmers Trusting FarmFriend Connect</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
