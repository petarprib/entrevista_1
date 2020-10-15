import React from 'react';
import './Cart.css';
import CartItem from './CartItem.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartList = (props) => {
    const { cartList } = props;

    const cartItems = cartList.map((cartItem, i) => (
        <CartItem
            key={i}
            cartItem={cartItem}
        />
    ));

    return (
        <div>
            <Row id="cart-head" className="pb-3">
                <Col xs={4}></Col>
                <Col className="text-center" xs={2}>
                    Name
                </Col>
                <Col className="text-center" xs={2}>
                    Quantity
                </Col>
                <Col className="text-center" xs={2}>
                    Discount
                </Col>
                <Col className="text-center" xs={2}>
                    Price
                </Col>
            </Row>
            {cartItems}
        </div >
    );

}

export default CartList;