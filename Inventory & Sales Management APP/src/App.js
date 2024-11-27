import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SalesTracker from './components/SalesTracker';
import SyncStatus from './components/SyncStatus';

const App = () => {
    return (
        <div>
            <h1>Inventory Sales App</h1>
            <ProductForm />
            <ProductList />
            <SalesTracker />
            <SyncStatus />
        </div>
    );
};

export default App;