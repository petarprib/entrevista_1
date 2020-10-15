import React from 'react';
import Image from 'react-bootstrap/Image';

const CartItem = (props) => {
    const { cartItem } = props;

    return (
        <div>
            <Image src={`${cartItem.image}`} alt={`${cartItem.name}`} className="w-25" />
            <p>{`name: ${cartItem.name}`}</p>
            <p>{`quantity: ${cartItem.quantity}`}</p>
            <p>{`total: ${cartItem.total}`}</p>
            <p>{`disc: ${cartItem.disc}`}</p>
            <hr></hr>
        </div>
    );
}

export default CartItem;