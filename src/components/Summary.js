import React from 'react';

function Summary(props) {

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
                <button type="submit">Checkout</button>
            </div>
        </aside>
    )
}
export default Summary;