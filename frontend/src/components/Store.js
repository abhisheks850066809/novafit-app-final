import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
 //import 'bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button'
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Carousel
} from 'react-bootstrap';
function store() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#">NovaFit</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">Products</Nav.Link>
                                    <Nav.Link href="#">Contact Us</Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                            <Navbar.Brand href="#home">
    
                                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" width="110px" height="110px" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://via.placeholder.com/800x300.png?text=Slider+1" alt="First slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://via.placeholder.com/800x300.png?text=Slider+2" alt="Second slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://via.placeholder.com/800x300.png?text=Slider+3" alt="Third slide"/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className='text-center my-4'>Featured Products</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12}
                        sm={6}
                        md={3}>
                        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.w0F2RqvWr4RgDtlVnhdK-gHaHa?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>T-Shirt Name</Card.Title>
        <Card.Text>
          This is a description of the T-shirt.
        </Card.Text>
        <Card.Text>$19.99</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col xs={12}
                        sm={6}
                        md={3}>
                       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.w0F2RqvWr4RgDtlVnhdK-gHaHa?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>T-Shirt Name</Card.Title>
        <Card.Text>
          This is a description of the T-shirt.
        </Card.Text>
        <Card.Text>$19.99</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col xs={12}
                        sm={6}
                        md={3}>
                      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.w0F2RqvWr4RgDtlVnhdK-gHaHa?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>T-Shirt Name</Card.Title>
        <Card.Text>
          This is a description of the T-shirt.
        </Card.Text>
        <Card.Text>$19.99</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col xs={12}
                        sm={6}
                        md={3}>
                       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.w0F2RqvWr4RgDtlVnhdK-gHaHa?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>T-Shirt Name</Card.Title>
        <Card.Text>
          This is a description of the T-shirt.
        </Card.Text>
        <Card.Text>$19.99</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default store;
