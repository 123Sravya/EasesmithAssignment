// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <input type="text" placeholder="Search products" />
            <div>
                <i className="icon-profile"></i>
                <i className="icon-cart"></i>
            </div>
        </header>
    );
};

export default Header;
