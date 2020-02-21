import React from "react";
import PropTypes from "prop-types";

function Summary(props) {

    function handleClickSummary(ev) {
        ev.preventDefault();
        alert("Thank you for your order!")
    }

    return (
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper border">
                <li>
                    <span className="summary-items-number">{props.items} Items</span>
                    <span className="summary-items-price">{props.price}<span className="currency">€</span></span>
                </li>
            </ul>
            <div className="summary-discounts wrapper-half border">
                <h2>Discounts</h2>
                <ul>
                    <li><span>2x1 Mug offer</span><span>-{props.discountMug}€</span></li>
                    <li><span>x3 Shirt offer</span><span>-{props.discountShirt}€</span></li>
                    <li><span>Promo code</span><span>0€</span></li>
                </ul>
            </div>
            <div className="summary-total wrapper">
                <ul>
                    <li>
                        <span className="summary-total-cost">Total cost</span>
                        <span className="summary-total-price">{props.totalCost}</span>
                    </li>
                </ul>
                <button className="summary-button" type="submit" onClick={handleClickSummary}>Checkout</button>
            </div>
        </aside>
    )
}

Summary.propTypes = {
    items: PropTypes.number,
    price: PropTypes.number,
    discountMug: PropTypes.number,
    discountShirt: PropTypes.number,
    totalCost: PropTypes.number,
    handleClick: PropTypes.func
};

export default Summary;