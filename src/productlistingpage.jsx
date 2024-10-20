// src/pages/ProductListing.js
import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';
import { products } from '../data';

const ProductListing = () => {
    const [cartProduct, setCartProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const handleAddToCart = (product) => {
        setCartProduct(product);
    };

    const handleCloseModal = () => {
        setCartProduct(null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    return (
        <div>
            <Header />
            <div className="product-list">
                {currentProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <Pagination 
                totalPages={Math.ceil(products.length / productsPerPage)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            {cartProduct && <AddToCartModal product={cartProduct} onClose={handleCloseModal} />}
        </div>
    );
};

export default ProductListing;
