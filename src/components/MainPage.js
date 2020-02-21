import React from "react";
import ProductsList from "./ProductsList";
import Summary from "./Summary";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.apiData,
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
    //this function recives an id of the product clicked as a parameter, find the element in products array
    //that matches the id, if its productValue its higher than 0 it removes one value and update productValue.
    //After that it calls the handleUpdate function
    substractProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        if (item.productValue > 0) {
            this.setState({ productValue: item.productValue-- });
        }
        this.handleUpdate();
    }

    //Function that adds one product in Cart
    //this function recives an id of the product clicked as a parameter, find the element in products array
    //that matches the id, adds one value in productValue and updates it.
    //After that it calls the handleUpdate function
    addProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        this.setState({ productValue: item.productValue++ });
        this.handleUpdate();
    }

    //Function that update the total price of the product in Cart
    //this function recives item as parameter. Makes a loop to update newTotal variable in all elements
    //multiplying productValue with productPrice and updates totalPrice with newTotal
    updatePriceCart(item) {
        for (let i = 0; i < item.length; i++) {
            let newTotal = item[i].productValue * item[i].productPrice;
            this.setState({ totalPrice: item[i].totalPrice = newTotal });
        }
    }

    //Function that update the items in Summary
    //this function recives item as parameter. Declares nTotal as a sum of all productValue properties
    //and updates items with nTotal
    updateItems(item) {
        const nTotal = item.map(n => n.productValue).reduce((acc, number) => acc + number, 0);
        this.setState({ items: nTotal });
    }

    //Function that update the total price of the products in Summary
    //this function recives item as parameter. Declares nTotal as a sum of all totalPrice properties,
    //updates price with nTotal and return nTotal
    updatePriceOrder(item) {
        const nTotal = item.map(n => n.totalPrice).reduce((acc, number) => acc + number, 0);
        this.setState({ price: nTotal });
        return nTotal;
    }

    //Function that update the total discount of Mug product
    //this function recives item as parameter. Declares totalMugs as the element with Mug as productName.
    //If its productValue its higher than 0 declares discountMug as the result of productvalue divided by 2. It uses parseInt
    //to get only integer numbers (1,2,3,etc.). Updates discountMug with its value multiply by its price and return it.
    //If its productValue its lower than 0. Updates discountMug with 0 and return 0.
    updateDiscountMug(item) {
        const totalMugs = item.find(item => item.productName === 'Mug');
        if (totalMugs.productValue > 0) {
            let discountMug = parseInt(totalMugs.productValue / 2);
            this.setState({ discountMug: discountMug * 5 });
            return discountMug * 5;
        }
        else {
            this.setState({ discountMug: 0 });
            return 0;
        }
    }

    //Function that update the total discount of Shirt product
    //this function recives item as parameter. Declares totalShirt as the element with Shirt as productName.
    //If its productValue its higher than 2 declares discountShirt as the result of totalPrice multiply by 0.05
    //Updates discountShirt and return it.
    //If its productValue its 2 or lower. Updates discountShirt with 0 and return 0.
    updateDiscountShirt(item) {
        const totalShirt = item.find(item => item.productName === 'Shirt');
        if (totalShirt.productValue > 2) {
            let discountShirt = totalShirt.totalPrice * 0.05
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
    //this function will call another functions to update Cart and Summary.
    //This function declares 3 parameters (price,discountMug,discountShirt) for updateTotalCost function.
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
                <ProductsList products={this.state.products}
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