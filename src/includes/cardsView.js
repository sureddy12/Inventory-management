import React from 'react'
import Products from '../components/Products'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProductApi from '../data/ProductApi'
import UserStore from '../stores/UserStore'
import Accordion from 'react-bootstrap/Accordion'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import CardViewTest from './CardViewTest'

const noImage= `https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg`
export default class CardsView extends React.Component {

  state = {
    query: '',
    checkedProducts: {},
    columns: {
      productName: true,
      manufacturer: true,
      price: true,
      quantity: true,
      image: true
    }
  }

  onChangeHandler = e => {
    console.log(e)
    const query = e.target.value
        this.setState({query})
  }

  handleCheck = (productId, checked) => {
    this.setState(
      prevState => {
        const checkedProducts = prevState.checkedProducts
        checkedProducts[productId] = checked
        return {checkedProducts}
      }
    )
  }

  onDelete = () => {
    console.log(this.state.checkedProducts)
    const checkedArray = Object.keys(this.state.checkedProducts).filter(id => this.state.checkedProducts[id] === true)
    console.log(checkedArray)
    ProductApi.deleteProducts(checkedArray)
    window.location.reload()
  }
  
  render() {
    const currentUser = UserStore.getCurrentUser()
    const products = this.props.products
    const query = this.state.query
    const filteredProducts = products && products.filter(product => {
      return product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    return (
      <div className='d-flex' id='cardContainer' >
        {/* <CardViewTest /> */}
       <Container style={{ color:"red", marginRight: '-2%'}} >
            <Row>
                <Form.Control className='col-md-3 offset-4 mt-5' type="text" placeholder="Search Product" onChange={this.onChangeHandler} />
            </Row>
            <Row>
            </Row>
            <Row>
            {filteredProducts && filteredProducts.map(product => {return(
              <Card style={{ width: '18rem', margin:'2%' }} className='mt-5' >
              <Card.Img variant="top" className={ this.state.columns.image ? "" : "d-none"} src={product.productImage !== ' '? product.productImage : noImage} alt='prodImage'/>
              <Card.Body>
                  <Card.Title className= { this.state.columns.productName ? "" : "d-none"} >ProductName: {product.productName}</Card.Title>
                  <Card.Text className= { this.state.columns.manufacturer ? "" : "d-none"} >
                      Manufracturer: {product.manufacturer}
                  </Card.Text>
                  <Card.Text className= { this.state.columns.price ? "" : "d-none"}>
                  ₹: {product.price}
                  </Card.Text>
                  <Card.Text className= { this.state.columns.quantity ? "" : "d-none"} >
                      Quantity: {product.quantity}
                  </Card.Text>
                  { currentUser ? 
                  <Link to={`/productDetails/${product.id}`} onClick={this.clickHandler}>View Detail</Link>
                  // <Button variant="outline-danger" onClick={this.onDelete}>Delete</Button>
                : null  
                }
              </Card.Body>
          </Card>
            )}
            )}
            </Row>
        </Container> 
        <Row className='' style={{ marginTop: '8%', marginRight:"2%"}} >
         <Accordion>
  <Card>
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click to Customise Product Fields</Tooltip>}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="info" eventKey="0">
        Customise Fields
      </Accordion.Toggle>
    </Card.Header>
    </OverlayTrigger>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        Product Name: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, productName: checked}}
              }
            )
          }} />
        Manufacturer: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, manufacturer: checked}}
              }
            )
          }} />
        Price: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, price: checked}}
              }
            )
          }} />
        Quantity: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, quantity: checked}}
              }
            )
          }} />
        Image: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, image: checked}}
              }
            )
          }} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
         </Row>     
      </div>
    )
  }
}