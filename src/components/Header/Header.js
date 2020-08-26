import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
const Header = () => {
    return (
        <div>
            <div className="top-area">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/manage">Manage Inventory</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;