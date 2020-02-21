# Shopping-cart test project

Link to server of GitHub Pages: https://github.com/ibelreal/shopping-cart

### Description

Hello, this is mi solution to a technical test, in which, you inherit a code in pure javascript, html & css and you have to create an app using a framework. When you start the app you will see a list of products which you can add or remove items using +/- buttons. Next to the cart, you have a summary with the order.

## Technologies Used

- React
- Javascript
- css

## Structure of the project

+ src
    + api
        +dataProducts.json
    + components
        +App.js
        +MainPage.js
        +Products.js
        +ProductsDetail.js
        +ProductsList.js
        +Summary.js
        +TableHead.js
    + images
    + stylesheets
 

## Installation

> To saw it in local, you need to clone the repository, introduce `npm install` and execute `npm start` in the terminal and it will be open in [http://localhost:3000](http://localhost:3000)

## Technical Requirements:

[x] The app should be decompose in components: The app it's made in React

[x] Add/Remove product card items using the +/- buttons: They work, every time you click one of the buttons the number of the product will change.

[x] Calculate the totals of each product and the summary total accordingly: Using the state of React and functions every total will change according to the information.

[x] All totals in order summary should be updated whenever a product is added or removed: When you add or remove a product the summary will change.

## Bonus Requirements developed:

[x] Product Detail modal: It's implemented only for shirts. But the code is prepare to grow for the other products.

[x] Discounts: The discounts are prepare to apply whenever you add or remove a product.

