import React from 'react'
import Products from '../components/Products'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
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

export default class CardsViewTest extends React.Component {

  state = {
    query: '',
    checkedProducts: {},
    columns: {
      productName: true,
      manufacturer: true,
      price: true,
      quantity: true,
      checkToSelect: true
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
    console.log("=========", products)
    
    const query = this.state.query
    const filteredProducts = products.filter(product => {
      return product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    return (
        <Container>
            <Row>
                {/* <Form.Control className='col-md-3 offset-4 mt-5' type="text" placeholder="Search Product" /> */}
            </Row>
            <Row>
                
            </Row>
            <Row>
            {filteredProducts.map(product =>
                      <Products
                      productId={product.id}
                      productName={product.productName}
                      productDescription={product.productDescription}
                      manufacturer={product.manufacturer}
                      price={product.price} 
                      quantity={product.quantity} 
                      onCheck={this.handleCheck}
                      columns={this.state.columns}/>
                    )}
                <Card style={{ width: '18rem' }} className='mt-5' >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>ProductName</Card.Title>
                        <Card.Text>
                            Manufracturer
                        </Card.Text>
                        <Card.Text>
                            Price
                        </Card.Text>
                        <Card.Text>
                            Quantity
                        </Card.Text>
                        <Button variant="outline-danger" >Delete</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
  }
}