export const homeQuantityToggle= (event, id, stock) => {
    const currentCardElement= document.querySelector(`#card${id}`);
    //console.log(currentCardElement);

    const productQuantity= currentCardElement.querySelector('.productQuantity');
    //console.log(productQuantity);
    // if (!productQuantity) {
    //     console.error("Product quantity element not found.");
    //     return;
    // }

    let quantity= parseInt(productQuantity.getAttribute("data-quantity")) || 1;
    if(event.target.className === "cardIncrement"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock){
            quantity= stock;
        }
    }
    if(event.target.className === "cardDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
        else if(quantity === 1){
            quantity=1;
        }
    }
    productQuantity.innerText= quantity;
    console.log(quantity);

    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
};
