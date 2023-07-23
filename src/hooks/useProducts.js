import { useEffect, useState } from "react"

const useProducts = () => {
    const [cocktails, setCocktails] = useState([]);
    const [searchText, setSearchText] = useState('');
    const searchHandler = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            // .then(data => setCocktails(data.drinks))
            .then(data => {
                const cocktailsQuantity = data.drinks.map((cocktail) => ({
                    ...cocktail, quantity: 0
                }))
                setCocktails(cocktailsQuantity);
            })
    }, [searchText])

    return [cocktails, searchText, searchHandler];
}
export default useProducts;