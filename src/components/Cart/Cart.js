import React from 'react';
import './Cart.css';
import { useState } from 'react';
const Cart = (props) => {
    const cartItems = props.cart;
    console.log(cartItems);

    

    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const product = cartItems[i];
        total = total +product.price;
        shipping = shipping + product.shipping;
        grandTotal = shipping+ total;
    }

    return (
        <div>
            <h2>Cart Samary</h2>
            <p>Product Added : {props.cart.length}</p>
            <p>Net Price : {total}</p>
            <p>Shipping : {shipping}</p>
            <p>Total Payable Amount : {grandTotal}</p>
        </div>
    );
};

export default Cart;