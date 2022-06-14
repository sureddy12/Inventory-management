import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App'


function Corouselk() {
  return (
    <div>
        <Carousel className='corousel'>
  <Carousel.Item>
    <img
      className="d-block w-100"
    //   height={'100%'}
      src="https://picsum.photos/seed/img1/900/350"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/seed/img2/900/350"
      alt="Second slide"
    />

    <Carousel.Caption className='caption'>
      <h3 className='caption'>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/seed/img3/900/350"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Corouselk