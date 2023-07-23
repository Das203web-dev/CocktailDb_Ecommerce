import { useEffect, useState } from "react"
import { getCart } from "../components/utilities/localStorage";

const useCart = (cocktails) => {
    const [cart, setCart] = useState([]);
    const savedCart = [];
    useEffect(() => {
        const getTingCart = getCart();
        for (const id in getTingCart) {
            const newAddedProduct = cocktails.find(product => product.idDrink === id);
            if (newAddedProduct) {
                savedCart.push(newAddedProduct)
            }

        }
        setCart(savedCart);
    }, [cocktails]);
    return [cart, setCart]
}
export default useCart;