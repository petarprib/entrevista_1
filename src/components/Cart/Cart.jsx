import React, { useState, useEffect } from 'react';
import './Cart.css';
import CartList from './CartList.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = (props) => {
    const { cart } = props;
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setdiscount] = useState(0);

    let newCartList = cart;
    let totalArray = [];
    let discountArray = [];

    useEffect(() => {
        setCartList(newCartList);

        const reducer = (acc, cur) => acc + cur;
        if (totalArray.length) setTotal(totalArray.reduce(reducer).toFixed(2));
        if (discountArray.length) setdiscount(discountArray.reduce(reducer).toFixed(2));
    }, []);

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === "GR1") {
            let greenTeaTotal = (Math.round((cart[i].price * cart[i].quantity / 2) * 100) / 100).toFixed(2);
            newCartList[i].total = greenTeaTotal;
            newCartList[i].discount = greenTeaTotal;
            totalArray.push(Number(greenTeaTotal));
            discountArray.push(Number(greenTeaTotal));
        }

        if (cart[i].id === "SR1") {
            let strawberriesTotal = (Math.round((cart[i].price * cart[i].quantity) * 100) / 100).toFixed(2);
            let strawberriesDiscount;
            if (cart[i].quantity > 2) {
                strawberriesDiscount = (Math.round((strawberriesTotal * .10) * 100) / 100).toFixed(2);
                newCartList[i].discount = strawberriesDiscount;
                discountArray.push(Number(strawberriesDiscount));
                strawberriesTotal -= strawberriesDiscount;
                strawberriesTotal = strawberriesTotal.toFixed(2);
            }
            newCartList[i].total = strawberriesTotal;
            totalArray.push(Number(strawberriesTotal));
        }

        if (cart[i].id === "CF1") {
            let coffeeTotal = (Math.round((cart[i].price * cart[i].quantity) * 100) / 100).toFixed(2);
            let coffeeDiscount;
            if (cart[i].quantity > 2) {
                coffeeDiscount = (Math.round((coffeeTotal / 3) * 100) / 100).toFixed(2);
                newCartList[i].discount = coffeeDiscount;
                discountArray.push(Number(coffeeDiscount));
                coffeeTotal -= coffeeDiscount;
                coffeeTotal = coffeeTotal.toFixed(2)
            }
            newCartList[i].total = coffeeTotal;
            totalArray.push(Number(coffeeTotal));
        }
    }

    if (!cart.length) {
        return <p>You haven't added anything to the cart</p>
    } else {
        return (
            <div>
                <CartList cartList={cartList} />
                <Row id="cart-total" className="d-flex justify-content-end">
                    <Col className="text-center discount-and-total py-5" xs={2}>
                        <p className="mb-0">{discount > 0 && `£${discount}`}</p>
                    </Col>
                    <Col className="text-center discount-and-total py-5" xs={2}>
                        <p className="mb-0">£{total}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cart;