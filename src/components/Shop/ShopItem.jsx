import React from 'react';
import './Shop.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';

const ShopItem = (props) => {
    const { product } = props;
    const { push } = useHistory();

    return (
        <Col xs={6} md={4}>
            <Col className="shop-item mb-3" xs={12} onClick={() => push(`/shop/${product.id}`)} >
                <Image src={`${product.image}`} alt={`${product.name}`} className="w-100" />
                <p className="text-center mb-0">{product.name}</p>
                <p className="text-center">£{product.price}</p>
            </Col>
        </Col >
    );
}

export default ShopItem;