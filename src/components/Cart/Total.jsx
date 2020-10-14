import React, { useState, useEffect } from 'react';

const Total = ({ cartList }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal((Math.round((Number(greenTea) + Number(strawberries) + Number(coffee)) * 100) / 100).toFixed(2));
    });

    let greenTea;
    let greenTeaDiscount;
    let strawberries;
    let strawberriesDiscount;
    let coffee;
    let coffeeDiscount;

    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].id === "GR1") {
            greenTea = (cartList[i].price * cartList[i].quantity / 2);
            greenTeaDiscount = greenTea;
        }

        if (cartList[i].id === "SR1") {
            strawberries = (cartList[i].price * cartList[i].quantity);
            if (cartList[i].quantity > 2) {
                strawberriesDiscount = (strawberries * .10);
                strawberries -= strawberriesDiscount;
            }
        }

        if (cartList[i].id === "CF1") {
            coffee = cartList[i].price * cartList[i].quantity;
            if (cartList[i].quantity > 2) {
                coffeeDiscount = coffee / 3;
                coffee -= coffeeDiscount;
            }
        }
    }

    return (
        <div>
            <p>£{greenTea}</p>
            <p>-£{greenTeaDiscount}</p>
            <hr />
            <p>£{strawberries}</p>
            <p>-£{strawberriesDiscount}</p>
            <hr />
            <p>£{coffee}</p>
            <p>-£{coffeeDiscount}</p>
            <p>Total: £{total}</p>
        </div>
    );
}

export default Total;