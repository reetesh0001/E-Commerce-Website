import products from "./E-Commerce/API/products.json"
import {getCartProductFromLS} from "./getCartProduct.js";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCartProductFromLS();
let filterProducts= products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement= document.querySelector("#productCartContainer");
const templateContainer= document.querySelector("#productCartTemplate");

const showCartProduct= () =>{
    filterProducts.forEach((curProd) => {
        const{category, id, image, name, stock, price}= curProd;
        let productClone= document.importNode(templateContainer.content, true);
        const LSActualData= fetchQuantityFromCartLS(id, price);
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent= category;
        productClone.querySelector(".productName").textContent= name;
        productClone.querySelector(".productImage").src= image;
        productClone.querySelector(".productQuantity").textContent= LSActualData.quantity;
        productClone.querySelector(".productPrice").textContent= LSActualData.price;
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));

        cartElement.appendChild(productClone);
    });
};
showCartProduct();
updateCartProductTotal();
