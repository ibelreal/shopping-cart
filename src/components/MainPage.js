import React from "react";
import Products from "./Products";
import Summary from "./Summary";
import apiData from "../api/dataProducts.json";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: apiData,
            items: 0,
            price: 0,
            discountMug: 0,
            discountShirt: 0,
            totalCost: 0
        }
        this.substractProduct = this.substractProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    //Function that substracts one product in Cart
    substractProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        if (item.productValue > 0) {
            this.setState({ productValue: item.productValue-- });
        }
        this.handleUpdate();
    }

    //Function that adds one product in Cart
    addProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        this.setState({ productValue: item.productValue++ });
        this.handleUpdate();
    }

    //Function that update the total price of the product in Cart
    updatePriceCart(item) {
        for (let i = 0; i < item.length; i++) {
            let newTotal = item[i].productValue * item[i].productPrice;
            this.setState({ totalPrice: item[i].totalPrice = newTotal });
        }
    }

    //Function that update the items in Summary
    updateItems(item) {
        const nTotal = item.map(n => n.productValue).reduce((acc, number) => acc + number, 0);
        this.setState({ items: nTotal });
    }

    //Function that update the total price of the product in Summary
    //this function recives item parameter and return the Total price of the order
    updatePriceOrder(item) {
        const nTotal = item.map(n => n.totalPrice).reduce((acc, number) => acc + number, 0);
        this.setState({ price: nTotal });
        return nTotal;
    }

    //Function that update the total discount of Mug product
    //this function recives item parameter and return the price of discount in Mug product
    updateDiscountMug(item) {
        let discountMug = this.state.discountMug;
        const totalMugs = item.find(item => item.productName === 'Mug');
        if (totalMugs.productValue > 0) {
            discountMug = parseInt(totalMugs.productValue / 2);
            this.setState({ discountMug: discountMug * 5 });
            return discountMug * 5;
        }
        else {
            this.setState({ discountMug: 0 });
            return 0;
        }
    }

    //Function that update the total discount of Shirt product
    //this function recives item parameter and return the price of discount in Shirt product
    updateDiscountShirt(item) {
        let discountShirt = this.state.discountShirt;
        const totalShirt = item.find(item => item.productName === 'Shirt');
        if (totalShirt.productValue > 2) {
            discountShirt = totalShirt.totalPrice * 0.05
            this.setState({ discountShirt: discountShirt });
            return discountShirt;
        }
        else {
            this.setState({ discountShirt: 0 });
            return 0;
        }
    }

    //Function that update the total Cost in Summary
    //this function recives price,discountMug and discountShirt as parameters to update the totalCost
    updateTotalCost(price, discountMug, discountShirt) {
        let totalCost = price - discountMug - discountShirt;
        this.setState({ totalCost });
    }

    //Function that handle the update of products after add or substract a product in the Cart
    //this function will call another functions to update Cart and Summary
    handleUpdate() {
        let item = this.state.products;
        this.updatePriceCart(item);
        this.updateItems(item);
        const price = this.updatePriceOrder(item);
        const discountMug = this.updateDiscountMug(item);
        const discountShirt = this.updateDiscountShirt(item);
        this.updateTotalCost(price, discountMug, discountShirt);
    }

    render() {
        return (
            <main className="App">
                <Products products={this.state.products}
                    addProduct={this.addProduct}
                    substractProduct={this.substractProduct}
                />
                <Summary items={this.state.items}
                    price={this.state.price}
                    discountMug={this.state.discountMug}
                    discountShirt={this.state.discountShirt}
                    totalCost={this.state.totalCost}
                />
            </main>
        );
    }
}
export default MainPage;