import React from "react";
import Products from "./Products";
import Summary from "./Summary";
import apiData from "../api/dataProducts.json";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: apiData
        }
        this.substractProduct = this.substractProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    //Function that substracts one product
    substractProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        if (item.productValue > 0) {
            this.setState({
                productValue: item.productValue--
            });
        }
    }
    //Function that adds one product
    addProduct(id) {
        const item = this.state.products.find(item => item.productCode === id);
        this.setState({
            productValue: item.productValue++
        });
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