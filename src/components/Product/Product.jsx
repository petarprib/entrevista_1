import React from 'react';
import { useParams } from 'react-router';

const Product = () => {
    const { id } = useParams();

    return (
        <div>
            <p>hello {id}</p>
        </div>
    );
}

export default Product;