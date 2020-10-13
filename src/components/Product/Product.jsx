import React from 'react';
import './Product.css';
import { useParams } from 'react-router';
import products from '../../products.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormGroup from 'react-bootstrap/FormGroup';

const Product = () => {
    const { id } = useParams();

    let product;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
            break;
        }
    }

    return (
        <div>
            <Row className="d-flex">
                <Col xs={12} sm={6} md={6}>
                    <Image src={`${product.image}`} alt={`${product.name}`} className="w-100" />
                </Col>
                <Col id="product-details" xs={12} sm={6} md={6}>
                    <Row>
                        <Col className="text-center" xs={6}>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </Col>
                        <Col xs={6}>
                            <Form>
                                <Form.Control id="amount" type="number" min="1" max="50" placeholder="Amount" />
                                <Button type="submit">Add to cart</Button>
                            </Form>
                        </Col>
                    </Row>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, id in deleniti repellendus voluptate necessitatibus distinctio optio cupiditate nostrum laboriosam at, illum reprehenderit quo accusamus. Reiciendis nesciunt, illum officia neque asperiores temporibus quam architecto corporis amet repellat? Inventore, necessitatibus. Accusamus facere voluptas quas. Modi eum velit veniam ad dolorum obcaecati totam ipsum quas doloribus labore eius laudantium rem ipsa molestiae accusantium consectetur cupiditate, error alias non adipisci qui nulla dolorem debitis! Ducimus, numquam consequatur quas accusantium atque exercitationem voluptatibus placeat illum odit velit porro provident, quidem cupiditate minus quam sit tempore suscipit natus ea, enim soluta quaerat. Ullam, aspernatur architecto.</p> */}
                </Col>
            </Row>
        </div>
    );
}

export default Product;