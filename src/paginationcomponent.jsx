// src/components/Pagination.js
import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    
    return (
        <div className="pagination">
            {pages.map(page => (
                <button 
                    key={page} 
                    onClick={() => onPageChange(page)} 
                    className={page === currentPage ? 'active' : ''}>
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
