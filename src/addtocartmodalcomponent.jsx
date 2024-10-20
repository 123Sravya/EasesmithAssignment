// src/components/AddToCartModal.js
import React from 'react';

const AddToCartModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button onClick={onClose}>Confirm Add to Cart</button>
            </div>
        </div>
    );
};

export default AddToCartModal;
