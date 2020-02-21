(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/close.4d585d83.png"},24:function(e){e.exports=JSON.parse('[{"productName":"Shirt","productCode":"X7R2OPX","productPrice":20,"productValue":0,"totalPrice":0,"imageSrc":"./images/shirt.png","imageDetailSrc":"./images/tshirt.jpg","imageAlt":"white shirt photo"},{"productName":"Mug","productCode":"X2G2OPZ","productPrice":5,"productValue":0,"totalPrice":0,"imageSrc":"./images/mug.png","imageAlt":"purple mug photo"},{"productName":"Cap","productCode":"X3W2OPY","productPrice":10,"productValue":0,"totalPrice":0,"imageSrc":"./images/cap.png","imageAlt":"purple cap photo"}]')},25:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(21),u=a.n(n),s=a(10),l=a(11),i=a(14),o=a(12),d=a(6),m=a(15),p=a(5);var h=function(e){var t=e.product,a=t.productName,r=t.productCode,n=t.productPrice,u=t.totalPrice,s=t.productValue,l=t.imageSrc,i=t.imageAlt;return c.a.createElement("li",{className:"product row"},c.a.createElement("div",{className:"col-product"},c.a.createElement("figure",{className:"product-image"},c.a.createElement("img",{src:"".concat(l),alt:i}),c.a.createElement("div",{className:"product-description"},c.a.createElement(p.b,{to:"/".concat(r,"/"),replace:!0},c.a.createElement("h1",null,a)),c.a.createElement("p",{className:"product-code"},"Product code ",r)))),c.a.createElement("div",{className:"col-quantity",id:r},c.a.createElement("button",{className:"count",onClick:function(t){t.preventDefault(),e.substractProduct(t.target.parentNode.id)}},"-"),c.a.createElement("input",{type:"text",className:"product-quantity",value:s,readOnly:!0}),c.a.createElement("button",{className:"count",onClick:function(t){t.preventDefault(),e.addProduct(t.target.parentNode.id)}},"+")),c.a.createElement("div",{className:"col-price"},c.a.createElement("span",{className:"product-price"},n),c.a.createElement("span",{className:"product-currency currency"},"\u20ac")),c.a.createElement("div",{className:"col-total"},c.a.createElement("span",{className:"product-price"},u),c.a.createElement("span",{className:"product-currency currency"},"\u20ac")))};var E=function(e){return c.a.createElement("section",{className:"products"},c.a.createElement("h1",{className:"main"},"Shopping cart"),c.a.createElement("ul",{className:"products-list"},e.products.map((function(t,a){return c.a.createElement(h,{key:a,product:t,addProduct:e.addProduct,substractProduct:e.substractProduct})}))))};var f=function(e){return c.a.createElement("aside",{className:"summary"},c.a.createElement("h1",{className:"main"},"Order Summary"),c.a.createElement("ul",{className:"summary-items wrapper border"},c.a.createElement("li",null,c.a.createElement("span",{className:"summary-items-number"},e.items," Items"),c.a.createElement("span",{className:"summary-items-price"},e.price,c.a.createElement("span",{className:"currency"},"\u20ac")))),c.a.createElement("div",{className:"summary-discounts wrapper-half border"},c.a.createElement("h2",null,"Discounts"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",null,"2x1 Mug offer"),c.a.createElement("span",null,"-",e.discountMug,"\u20ac")),c.a.createElement("li",null,c.a.createElement("span",null,"x3 Shirt offer"),c.a.createElement("span",null,"-",e.discountShirt,"\u20ac")),c.a.createElement("li",null,c.a.createElement("span",null,"Promo code"),c.a.createElement("span",null,"0\u20ac")))),c.a.createElement("div",{className:"summary-total wrapper"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",{className:"summary-total-cost"},"Total cost"),c.a.createElement("span",{className:"summary-total-price"},e.totalCost))),c.a.createElement("button",{className:"summary-button",type:"submit",onClick:function(e){e.preventDefault(),alert("Thank you for your order!")}},"Checkout")))},g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={products:e.apiData,items:0,price:0,discountMug:0,discountShirt:0,totalCost:0},a.substractProduct=a.substractProduct.bind(Object(d.a)(a)),a.addProduct=a.addProduct.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"substractProduct",value:function(e){var t=this.state.products.find((function(t){return t.productCode===e}));t.productValue>0&&this.setState({productValue:t.productValue--}),this.handleUpdate()}},{key:"addProduct",value:function(e){var t=this.state.products.find((function(t){return t.productCode===e}));this.setState({productValue:t.productValue++}),this.handleUpdate()}},{key:"updatePriceCart",value:function(e){for(var t=0;t<e.length;t++){var a=e[t].productValue*e[t].productPrice;this.setState({totalPrice:e[t].totalPrice=a})}}},{key:"updateItems",value:function(e){var t=e.map((function(e){return e.productValue})).reduce((function(e,t){return e+t}),0);this.setState({items:t})}},{key:"updatePriceOrder",value:function(e){var t=e.map((function(e){return e.totalPrice})).reduce((function(e,t){return e+t}),0);return this.setState({price:t}),t}},{key:"updateDiscountMug",value:function(e){var t=e.find((function(e){return"Mug"===e.productName}));if(t.productValue>0){var a=parseInt(t.productValue/2);return this.setState({discountMug:5*a}),5*a}return this.setState({discountMug:0}),0}},{key:"updateDiscountShirt",value:function(e){var t=e.find((function(e){return"Shirt"===e.productName}));if(t.productValue>2){var a=.05*t.totalPrice;return this.setState({discountShirt:a}),a}return this.setState({discountShirt:0}),0}},{key:"updateTotalCost",value:function(e,t,a){var r=e-t-a;this.setState({totalCost:r})}},{key:"handleUpdate",value:function(){var e=this.state.products;this.updatePriceCart(e),this.updateItems(e);var t=this.updatePriceOrder(e),a=this.updateDiscountMug(e),r=this.updateDiscountShirt(e);this.updateTotalCost(t,a,r)}},{key:"render",value:function(){return c.a.createElement("main",{className:"App"},c.a.createElement(E,{products:this.state.products,addProduct:this.addProduct,substractProduct:this.substractProduct}),c.a.createElement(f,{items:this.state.items,price:this.state.price,discountMug:this.state.discountMug,discountShirt:this.state.discountShirt,totalCost:this.state.totalCost}))}}]),t}(c.a.Component),v=a(13),N=a.n(v);var P=function(e){var t=e.product,a=t.productName,r=t.productCode,n=t.productPrice,u=t.imageDetailSrc,s=t.imageAlt;return c.a.createElement("main",{className:"App"},c.a.createElement("section",{className:"productDetail"},c.a.createElement("div",{className:"countainer-image"},c.a.createElement("img",{className:"image",src:"".concat(u),alt:s}))),c.a.createElement("aside",{className:"summary detail"},c.a.createElement(p.b,{to:"/",replace:!0},c.a.createElement("img",{className:"close-tag",src:N.a,alt:"grey cross"})),c.a.createElement("h1",{className:"text-end"},a," ",c.a.createElement("span",null,n,"\u20ac")),c.a.createElement("div",{className:"summary-discounts wrapper-half border"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",{className:"text-detail"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.")))),c.a.createElement("p",{className:"product-code"},"Product code  ",r),c.a.createElement("div",{className:"summary-total wrapper no-top"},c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),e.handleClick(r)}},"Add to cart"))))},b=a(7),y=a(24),C=(a(35),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={products:y},a.renderProductDetail=a.renderProductDetail.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.products.find((function(t){return t.productCode===e}));this.setState({productValue:t.productValue++}),alert("You added a product!")}},{key:"renderProductDetail",value:function(e){var t=e.match.params.product,a=this.state.products.find((function(e){return e.productCode===t}));return"X7R2OPX"===a.productCode?c.a.createElement(P,{product:a,handleClick:this.handleClick}):c.a.createElement("main",{className:"App"},c.a.createElement("h1",{className:"not-found"},"Ups...This product doesn't exist"),c.a.createElement(p.b,{to:"/",replace:!0},c.a.createElement("img",{className:"close-tag",src:N.a,alt:"grey cross"})))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/"},c.a.createElement(g,{apiData:this.state.products})),c.a.createElement(b.a,{path:"/:product",render:this.renderProductDetail})))}}]),t}(c.a.Component));u.a.render(c.a.createElement(p.a,null,c.a.createElement(C,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ea71fe48.chunk.js.map