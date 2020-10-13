import React from 'react';
import './Shop.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const ShopItem = (props) => {
    const { product } = props;

    return (
        <Col className="shop-item" xs={12} md={4}>
            <Image src={`${product.image}`} className="w-75" />
            <p className="text-center">{product.name}</p>
            <p className="text-center">{product.price}</p>
        </Col >
    );
}

export default ShopItem;