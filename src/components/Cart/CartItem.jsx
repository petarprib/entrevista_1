import React from 'react';

const CartItem = ({ cartItem }) => {
    return (
        <div>
            <p>{cartItem.name}</p>
            <p>{cartItem.quantity}</p>
            <hr></hr>
        </div>
    );
}

export default CartItem;