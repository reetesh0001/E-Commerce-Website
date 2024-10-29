import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        showToast("delete", id);
    }
    updateCartValue(cartProducts);
};