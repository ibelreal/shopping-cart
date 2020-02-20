import React from 'react';
import ProductList from './ProductList';
import PropTypes from 'prop-types';

function Products(props) {
    return (
        <section className="products">
            <h1 className="main">Shopping cart</h1>
            <ul className="products-list">
                {props.products.map((product, index) => {
                    return <ProductList
                        key={index}
                        product={product}
                    />
                })}
            </ul>
        </section>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
};

export default Products;