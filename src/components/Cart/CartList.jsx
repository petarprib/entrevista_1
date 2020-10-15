import React from 'react';
import CartItem from './CartItem.jsx';

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
            {cartItems}
        </div >
    );

}

export default CartList;