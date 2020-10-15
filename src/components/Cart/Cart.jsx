import React, { useState, useEffect } from 'react';
import CartList from './CartList.jsx';

const Cart = (props) => {
    const { cart } = props;
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    const [disc, setDisc] = useState(0);

    let newCartList = cart;
    let totalArray = [];
    let discArray = [];

    useEffect(() => {
        setCartList(newCartList);

        const reducer = (acc, cur) => acc + cur;
        if (totalArray.length) setTotal(totalArray.reduce(reducer).toFixed(2));
        if (discArray.length) setDisc(discArray.reduce(reducer).toFixed(2));
    }, []);

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === "GR1") {
            let greenTeaTotal = (Math.round((cart[i].price * cart[i].quantity / 2) * 100) / 100).toFixed(2);

            newCartList[i].total = greenTeaTotal;
            newCartList[i].disc = greenTeaTotal;
            totalArray.push(Number(greenTeaTotal));
            discArray.push(Number(greenTeaTotal));
        }

        if (cart[i].id === "SR1") {
            let strawberriesTotal = (Math.round((cart[i].price * cart[i].quantity) * 100) / 100).toFixed(2);
            let strawberriesDisc;
            if (cart[i].quantity > 2) {
                strawberriesDisc = (Math.round((strawberriesTotal * .10) * 100) / 100).toFixed(2);
                strawberriesTotal -= strawberriesDisc;
                strawberriesTotal = strawberriesTotal.toFixed(2)
            }

            newCartList[i].total = strawberriesTotal;
            newCartList[i].disc = strawberriesDisc;
            totalArray.push(Number(strawberriesTotal));
            discArray.push(Number(strawberriesDisc));
        }

        if (cart[i].id === "CF1") {
            let coffeeTotal = (Math.round((cart[i].price * cart[i].quantity) * 100) / 100).toFixed(2);
            let coffeeDisc;
            if (cart[i].quantity > 2) {
                coffeeDisc = (Math.round((coffeeTotal / 3) * 100) / 100).toFixed(2);
                coffeeTotal -= coffeeDisc;
                coffeeTotal = coffeeTotal.toFixed(2)
            }

            newCartList[i].total = coffeeTotal;
            newCartList[i].disc = coffeeDisc;
            totalArray.push(Number(coffeeTotal));
            discArray.push(Number(coffeeDisc));
        }
    }

    if (!cart.length) {
        return <p>You haven't added anything to the cart</p>
    } else {
        return (
            <div>
                <CartList cartList={cartList} />
                <p>{total}</p>
                <p>{disc > 0 && `-${disc}`}</p>
            </div >
        );
    }
}

export default Cart;