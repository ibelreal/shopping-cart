import React from 'react';
import image from '../images/shirt.png'

function ProductList() {
    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src={image} alt="Shirt" />
                    {/* cambia src y alt 
                        <img src="img/mug.png" alt="Mug" />
                        <img src="img/cap.png" alt="Cap" />
                        */}
                    <div className="product-description">
                        <h1>Shirt</h1>
                        {/* <h1>Mug</h1> 
                            <h1>Cap</h1>
                            */}
                        <p className="product-code">Product code X7R2OPX</p>
                        {/* <p className="product-code">Product code X2G2OPZ</p> 
                            <p className="product-code">Product code X3W2OPY</p>*/}
                    </div>
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count">-</button>
                <input type="text" className="product-quantity" value="3" />
                {/* <input type="text" className="product-quantity" value="4" />
                <input type="text" className="product-quantity" value="4" /> */}
                <button className="count">+</button>
            </div>
            <div className="col-price">
                <span className="product-price">20</span>
                {/* <span className="product-price">5</span> 
                    <span className="product-price">10</span
            >*/}
                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                <span className="product-price">60</span>
                {/* <span className="product-price">20</span 
                <span className="product-price">40</span>*/}
                <span className="product-currency currency">€</span>
            </div>
        </li>
    );
}
export default ProductList;