import React from "react";
import MainPage from "./MainPage";
import ProductDetail from "./ProductDetail";
import { Route, Switch } from "react-router-dom";
import apiData from "../api/dataProducts.json";
import "../stylesheets/App.css";
import close from "../images/close.png";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: apiData
    }
    this.renderProductDetail = this.renderProductDetail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(code) {
    const selectProduct = this.state.products.find(product => product.productCode === code);
    this.setState({ productValue: selectProduct.productValue++ });
    alert('You added a product!')
  }

  renderProductDetail(props) {
    const routeId = props.match.params.product;
    const selectedProduct = this.state.products.find(product => product.productCode === routeId);
    if (selectedProduct.productCode === 'X7R2OPX') {
      return (
        < ProductDetail product={selectedProduct} handleClick={this.handleClick} />
      );
    } else {
      return (
        <main className="App">
          <h1 className="not-found">
            Ups...This product doesn't exist
          </h1>
          <Link to={'/'} replace>
            <img className="close-tag" src={close} alt="grey cross" />
          </Link>
        </main>);
    }
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" >
            <MainPage apiData={this.state.products} />
          </Route>
          <Route path="/:product" render={this.renderProductDetail} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
