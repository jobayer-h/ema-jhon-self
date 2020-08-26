import React from 'react';
import './Shop.css';
import Product from '../Product/Product';
import FakeData from '../../fakeData/index'
import { useState } from 'react';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [product, setProduct] = useState(FakeData);
    const [cart, setCart] = useState([]);
    const buttonHandler = (product) => {
        const newCart = [...cart , product];
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div className="product-area">
                {
                    product.map(single => <Product btn={buttonHandler} all = {single}></Product>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;