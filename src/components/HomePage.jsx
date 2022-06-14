import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Header from '../includes/header'
import Navbar from 'react-bootstrap/Navbar'
import TopViewedProductsPage from './TopViewedProductsPage'
import '../App'
import Corouselk from './Corousel'

const HomePage = () => {
    return(
        <div className='heropage' data-testid="test-about">
            <Header />
            <Corouselk />
            <footer>
            <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0 footer-text">
                {/* <Container className='text-center'> */}
                    <Navbar.Brand className='text-center footer-text' href="#">A Project made using React JS by okayashutosh@gmail.com</Navbar.Brand>
                {/* </Container> */}
            </Navbar>
            </footer>
        </div>
    )
}

export default HomePage