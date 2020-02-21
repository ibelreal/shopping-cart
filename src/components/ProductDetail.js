import React from "react";
import PropTypes from "prop-types";
import close from "../images/close.png";
import { Link } from "react-router-dom";

function ProductDetail(props) {

    //Destructuring props
    const { productName, productCode, productPrice, imageDetailSrc, imageAlt } = props.product;

    function handleClick(ev) {
        ev.preventDefault();
        props.handleClick(productCode);
    }

    return (
        <main className="App">
            <section className="productDetail">
                <div className="countainer-image">
                    <img className="image" src={`${imageDetailSrc}`} alt={imageAlt} />
                </div>
            </section>
            <aside className="summary detail">
                <Link to={'/'} replace>
                    <img className="close-tag" src={close} alt="grey cross" />
                </Link>
                <h1 className="text-end">{productName} <span>{productPrice}€</span></h1>
                <div className="summary-discounts wrapper-half border">
                    <ul>
                        <li><span className="text-detail">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. In sodales semper elit sit amet
                        interdum. Praesent volutpat sed elit vel
                        consectetur. Nulla tempus tincidunt ex, sit
                        amet semper ipsum imperdiet varius. In
                        rutrum aliquam nisl, sagittis faucibus felis
                        bibendum id.</span></li>
                    </ul>
                </div>
                <p className="product-code">Product code  {productCode}</p>
                <div className="summary-total wrapper no-top">

                    <button type="submit" onClick={handleClick}>Add to cart</button>
                </div>
            </aside>

        </main >
    )
}

ProductDetail.propTypes = {
    productName: PropTypes.string,
    productCode: PropTypes.string,
    productPrice: PropTypes.number,
    imageDetailSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    handleClick: PropTypes.func
};


export default ProductDetail;