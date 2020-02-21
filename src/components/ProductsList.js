import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductsList(props) {

    return (
        <section className="products">
            <h1 className="main">Shopping cart</h1>
            <ul className="products-list">
                {props.products.map((product, index) => {
                    return <Product
                        key={index}
                        product={product}
                        addProduct={props.addProduct}
                        substractProduct={props.substractProduct}
                    />
                })}
            </ul>
        </section>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    addProduct: PropTypes.func.isRequired,
    substractProduct: PropTypes.func.isRequired
};

export default ProductsList;