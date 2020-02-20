import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
    console.log(props)
    const { productName, productCode, productPrice, productValue, totalPrice, imageSrc, imageAlt } = props.product;
    // const { key } = props.key
    function handleValue(ev) {
        console.log(ev.target.value)
    }
    function substractProduct(ev) {
        console.log(ev.target.parentNode)
    }
    function addProduct(ev) {
        console.log(ev.target.parentNode)
    }

    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src={`${imageSrc}`} alt={imageAlt} />
                    <div className="product-description">
                        <h1>{productName}</h1>
                        <p className="product-code">Product code {productCode}</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity" id={productCode}>
                <button className="count" onClick={substractProduct}>-</button>
                <input type="text" className="product-quantity" value={productValue} onChange={handleValue} />
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

ProductList.propTypes = {
    productName: PropTypes.string,
    productCode: PropTypes.string,
    productPrice: PropTypes.number,
    productValue: PropTypes.number,
    totalPrice: PropTypes.number,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string
};

export default ProductList;