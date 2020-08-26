import React from 'react';
import './Product.css';
const Product = (props) => {
    const allProducts = props.all;
    // console.log(allProducts);
    const {img, name,price ,seller,stock,features,shipping} = allProducts;
    return (
        <div>
            <div className="product">
                <div className="product-img">
                    <img src={img} alt=""/>
                </div>
                <div className="product-info">
                    <h4>{name}</h4>
                    <div className="product-information">
                        <div className="left">
                            <p>by : {seller}</p>
                            <p>Price :${price}</p>
                            <p>shipping: ${shipping}</p>
                            <p>only {stock} items left. hurry up</p>
                            <button onClick={() => props.btn(allProducts)}>Add To Cart</button>                            
                        </div>
                        <div className="right">
                            <h4>Feature</h4>
                            <ul>
                                {
                                    features.map(feature => <li>{feature.description} : {feature.value}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;