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
    }


    render() {
        console.log(this.state.products)
        return (
            <main className="App">
                <Products products={this.state.products} />
                <Summary />
            </main>
        );
    }
}
export default MainPage;