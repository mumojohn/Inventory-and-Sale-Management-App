import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from IndexedDB or API
        setProducts([{ name: 'Product 1' }, { name: 'Product 2' }]);
    }, []);

    return products;
};

export default useProducts;