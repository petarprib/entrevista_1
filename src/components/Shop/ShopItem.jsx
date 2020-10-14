import React from 'react';
import './Shop.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';

const ShopItem = ({ product }) => {
    const { push } = useHistory();

    return (
        <Col xs={12} sm={6} md={4}>
            <Col className="shop-item" xs={12} onClick={() => push(`/shop/${product.id}`)} >
                <Image src={`${product.image}`} alt={`${product.name}`} className="w-100" />
                <p className="text-center">{product.name}</p>
                <p className="text-center">£{product.price}</p>
            </Col>
        </Col >
    );
}

export default ShopItem;