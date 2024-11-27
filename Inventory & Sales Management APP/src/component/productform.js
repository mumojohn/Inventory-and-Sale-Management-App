import React from 'react';

const ProductForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <input type="text" placeholder="Product Name" required />
            <input type="number" placeholder="Price" required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;