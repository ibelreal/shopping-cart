import React from "react";
import Products from "./Products";
import Summary from "./Summary";
import apiData from "../api/dataProducts.json";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: apiData,
            items: 0

        }
        this.substractProduct = this.substractProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
    }


    //Function that substracts one product
    substractProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        if (item.productValue > 0) {
            this.setState({
                productValue: item.productValue--
            });
        }
        this.handleValue();
    }
    //Function that adds one product
    addProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        this.setState({
            productValue: item.productValue++
        });

        this.handleValue();
    }

    updateTotal(item) {
        for (let i = 0; i < item.length; i++) {
            let newTotal = item[i].productValue * item[i].productPrice;
            this.setState({ totalPrice: item[i].totalPrice = newTotal });
        }
    }
    updateItems(item) {
        const nTotal = item.reduce((acc, number) => acc + number.productValue, 0);
        console.log(nTotal);
        this.setState({ items: nTotal });
    }

    handleValue() {
        let item = this.state.products;
        this.updateTotal(item);
        this.updateItems(item);

    }


    render() {
        console.log(this.state.products)
        return (
            <main className="App">
                <Products products={this.state.products}
                    addProduct={this.addProduct}
                    substractProduct={this.substractProduct}
                />
                <Summary />
            </main>
        );
    }
}
export default MainPage;