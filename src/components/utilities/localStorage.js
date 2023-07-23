// import { json } from "react-router-dom";

//condition for checking in localstorage that the cart item is already in there or not... 
const getCart = () => {
    let shoppingCart = {};
    const cartItem = localStorage.getItem('cart');
    if (cartItem) {
        shoppingCart = JSON.parse(cartItem)
    }
    return shoppingCart;
}

//condition for cart quantity if the cart is available or not....
const addToDb = (id) => {
    const cart = getCart();
    let quantity = cart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
//condition for deletin g item from cart......
const removeItem = (id) => {
    const storedcart = localStorage.getItem('cart');
    if (storedcart) {
        const shoppingCart = JSON.parse(storedcart);
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('cart', JSON.stringify(shoppingCart))
        }
    }
}
//delete shopping cart condition.......
const deleteCart = () => {
    localStorage.removeItem('cart');
}
export { getCart, addToDb, removeItem, deleteCart }