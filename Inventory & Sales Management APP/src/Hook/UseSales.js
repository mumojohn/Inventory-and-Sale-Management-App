import { useState, useEffect } from 'react';

const useSales = () => {
    const [sales, setSales] = useState(0);

    useEffect(() => {
        // Fetch sales data from IndexedDB or API
        setSales(1000);
    }, []);

    return sales;
};

export default useSales;