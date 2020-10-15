import React from 'react';
import './Cart.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CartItem = (props) => {
    const { cartItem } = props;

    return (
        <Row className="cart-item">
            <Col xs={3}>
                <Image src={`${cartItem.image}`} alt={`${cartItem.name}`} className="w-100" />
            </Col>
            <Col xs={1}></Col>
            <Col className="text-center my-auto" xs={2}>
                <p className="my-auto">{cartItem.name}</p>
            </Col>
            <Col className="text-center my-auto" xs={2}>
                <p className="my-auto">{cartItem.quantity}</p>
            </Col>
            <Col className="text-center my-auto" xs={2}>
                <p className="my-auto">{cartItem.discount > 0 && `£${cartItem.discount}`}</p>
            </Col>
            <Col className="text-center my-auto" xs={2}>
                <p className="my-auto">£{cartItem.total}</p>
            </Col>
        </Row >
    );
}

export default CartItem;