import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Product(props) {

    //Destructuring props
    const { productName, productCode, productPrice, totalPrice, productValue, imageSrc, imageAlt } = props.product;

    function substractProduct(ev) {
        ev.preventDefault();
        props.substractProduct(ev.target.parentNode.id);
    }

    function addProduct(ev) {
        ev.preventDefault();
        props.addProduct(ev.target.parentNode.id);
    }

    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src={`${imageSrc}`} alt={imageAlt} />
                    <div className="product-description">
                        <Link to={`/${productCode}/`} replace>
                            <h1>{productName}</h1>
                        </Link>
                        <p className="product-code">Product code {productCode}</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity" id={productCode}>
                <button className="count" onClick={substractProduct}>-</button>
                <input type="text" className="product-quantity" value={productValue} readOnly />
                <button className="count" onClick={addProduct}>+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{productPrice}</span>

                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                <span className="product-price">{totalPrice}</span>
                <span className="product-currency currency">€</span>
            </div>
        </li>
    );
}

Product.propTypes = {
    productName: PropTypes.string,
    productCode: PropTypes.string,
    productPrice: PropTypes.number,
    productValue: PropTypes.number,
    totalPrice: PropTypes.number,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    substractProduct: PropTypes.func,
    addProduct: PropTypes.func
};

export default Product;