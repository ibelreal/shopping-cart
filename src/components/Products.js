import React from 'react';
import ProductList from './ProductList';

function Products() {
    return (
        <section className="products">
            <h1 className="main">Shopping cart</h1>
            <ul className="products-list">
                <ProductList />
                <ProductList />
                <ProductList />
            </ul>
        </section>
    )
}
export default Products;