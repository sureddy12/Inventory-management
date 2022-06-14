import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Header from '../includes/header'
import image from './imgabout.png' 


function About() {
  return (
    <div data-testid="test-about" >
        <Header />
<Container className="mt-4">
                <Row > 
                    <Col className='mt-5 mr-5'>
                        <img src={image} alt="img" id='illustration'/>
                    </Col>
                    <Col>
                        <Card border="light" id="about">
                            <h1>About</h1>
                            <p>Products Inventory is an application made using React JS.<br />
                            It uses Bootstrap for a responsive User Interface.
                            You can start off by viewing our products in our inventory, search there to find the product you're looking for.
                            There's a bar chart which shows our top viewed products for a better User Experience.
                            There's also an option to customize the fields you wish to see in the products list page.
                            This app will open up more features for you, once you signin into our app. 
                            For that you'll need to register into our app first, by providing a few basic details.
                            Once successfully registered, you can sign in when you're authenticated.
                            When you become an authenticated user, you can do a lot of things, like, viewing product details, adding products, deleting or modifying them.
                            You also have the option of deleting multiple products in one go. 
                            You can also view about yourself by clicking on your name, on the navigation bar.
                            There are a lot of features in here, so what are you waiting for! Come, press that blue Sign in or Register button and enjoy Products Inventory!  
                            </p>
                        </Card>
                    </Col>
                    {/* <Col md="auto"> */}
                        {/* <Card style={{ width: '18rem' }} border="info"> */}
                            {/* <Card.Body> */}
                              {/* <Card.Title>Welcome!</Card.Title> */}
                              {/* <Card.Text> */}
                               {/* Already a User? */}
                              {/* </Card.Text> */}
                              {/* <Button variant="primary" href="/signIn">Sign in</Button> */}
                              {/* <Card.Text> */}
                               {/* New User? */}
                              {/* </Card.Text> */}
                              {/* <Button variant="primary" href="/register">Register</Button> */}
                            {/* </Card.Body> */}
                        {/* </Card> */}
                    {/* </Col> */}
                </Row>
            </Container>
    </div>
  )
}

export default About