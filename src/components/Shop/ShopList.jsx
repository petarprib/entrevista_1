import React from 'react';
import ShopItem from './ShopItem.jsx';
import Row from 'react-bootstrap/Row';

const ShopList = (props) => {
    const { products } = props;

    const shopList = products.map((product, i) => {
        return <ShopItem key={i} product={product} />
    });

    return (
        <Row>
            {shopList}
        </Row>
    );
}

export default ShopList;