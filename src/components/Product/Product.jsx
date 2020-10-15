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
    const { handleAddToCart } = props;
    const [quantity, setQuantity] = useState("Quantity");
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
            handleAddToCart({ ...product, quantity });
        }
    }

    return (
        <Row>
            <Col xs={12} sm={6}>
                <Image src={`${product.image}`} alt={`${product.name}`} className="w-100" />
            </Col>
            <Col xs={12} sm={6}>
                <Row id="product-details" className="p-3">
                    <Col className="text-center" xs={12} md={6}>
                        <p>{product.name}</p>
                        <p>£{product.price}</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Control
                                id="quantity"
                                className="mb-3"
                                type="number"
                                min="1"
                                placeholder="Quantity"
                                onChange={(e) => handleChange(e)}
                                value={quantity}
                            />
                            <Button className="w-100" type="submit">Add to cart</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Product;