// src/pages/ThankYouPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const productName = query.get('product');
    
    return (
        <div>
            <h1>Thank You for Your Interest in {productName}!</h1>
        </div>
    );
};

export default ThankYouPage;
