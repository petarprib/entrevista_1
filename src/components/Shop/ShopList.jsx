import React from 'react';
import ShopItem from './ShopItem.jsx';
import products from '../../products.json';
import Row from 'react-bootstrap/Row';

const ShopList = () => {
    const shopItems = products.map((product, i) => {
        return <ShopItem key={i} product={product} />
    });

    return (
        <Row>
            {shopItems}
        </Row>
    );
}

export default ShopList;