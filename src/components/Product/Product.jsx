import React, { useState } from 'react';
import './Product.css';
import { useParams } from 'react-router';
import products from '../../products.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Product = (props) => {
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();

    let product;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
            break;
        }
    }

    let handleChange = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(quantity) > 0) {
            props.handleAddToCart({ ...product, quantity });
        }
    }

    return (
        <Row>
            <Col xs={12} sm={6} md={6}>
                <Image src={`${product.image}`} alt={`${product.name}`} className="w-100" />
            </Col>
            <Col xs={12} sm={6} md={6}>
                <div id="product-details">
                    <Row>
                        <Col className="text-center" xs={6}>
                            <p>{product.name}</p>
                            <p>£{product.price}</p>
                        </Col>
                        <Col xs={6}>
                            <Form
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <Form.Control
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    placeholder="Quantity"
                                    onChange={(e) => handleChange(e)}
                                    value={quantity}
                                />
                                <Button type="submit">Add to cart</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, id in deleniti repellendus voluptate necessitatibus distinctio optio cupiditate nostrum laboriosam at, illum reprehenderit quo accusamus. Reiciendis nesciunt, illum officia neque asperiores temporibus quam architecto corporis amet repellat? Inventore, necessitatibus. Accusamus facere voluptas quas. Modi eum velit veniam ad dolorum obcaecati totam ipsum quas doloribus labore eius laudantium rem ipsa molestiae accusantium consectetur cupiditate, error alias non adipisci qui nulla dolorem debitis! Ducimus, numquam consequatur quas accusantium atque exercitationem voluptatibus placeat illum odit velit porro provident, quidem cupiditate minus quam sit tempore suscipit natus ea, enim soluta quaerat. Ullam, aspernatur architecto.</p>
            </Col>
        </Row>
    );
}

export default Product;