import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

getCartProductFromLS();

export const addToCart= (event, id, stock) => {
    const currentProdElem= document.querySelector(`#card${id}`);
    //console.log(currentProdElem);
    //function to get elemsnts present in local storage
    let arrLocalStorageProduct= getCartProductFromLS()
    let quantity= currentProdElem.querySelector(".productQuantity").innerText;
    let price= currentProdElem.querySelector(".productPrice").innerText;
    //console.log(quantity, price);
    
    price= price.replace("₹", "");
    price= Number(price* quantity);
    quantity= Number(quantity);

    let existingProd= arrLocalStorageProduct.find((curProd) =>curProd.id === id);

    if(existingProd && quantity>1){
        quantity= Number(existingProd.quantity) + Number(quantity);
        price= Number(price * quantity);
        let updatedCart= {id, quantity, price};
        updatedCart= arrLocalStorageProduct.map((curProd) => {
            if(curProd.id === id)
                return updatedCart;
            else
                return curProd;
        });
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    }
    if(existingProd){
        return false;
    }

    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct)); 
    console.log(quantity, price);

    updateCartValue(arrLocalStorageProduct);

    showToast("add", id);
};