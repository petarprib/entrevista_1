import React from 'react';
import CartItem from './CartItem.jsx';
import Total from './Total.jsx';

const CartList = ({ cartList }) => {
    // console.log(!cartList)
    if (!cartList.length) {
        return <p>You haven't added anything to the cart</p>
    } else {
        const cartItems = cartList.map((cartItem, i) => {
            return <CartItem key={i} cartItem={cartItem} />
        });

        return (
            <div>
                {cartItems}
                <Total cartList={cartList} />
            </div >
        );
    }

}

export default CartList;