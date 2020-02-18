import React from "react";
import Products from "./Products";
import Summary from "./Summary";


class MainPage extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <main class="App">
                <Products />
                <Summary />
            </main>
        );
    }
}
export default MainPage;