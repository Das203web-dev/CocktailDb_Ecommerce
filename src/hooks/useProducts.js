import { useEffect, useState } from "react"

const useProducts = () => {
    const [cocktails, setCocktails] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchNotFound, setSearchNotFound] = useState(false)
    const searchHandler = (e) => {
        setSearchText(e.target.value);
    };
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.drinks) {
                    const cocktailsQuantity = data.drinks.map(cocktail => ({
                        ...cocktail,
                        quantity: 0
                    }));
                    setCocktails(cocktailsQuantity);
                    setSearchNotFound(false)
                }
                else {
                    setCocktails([])
                    setSearchNotFound(true)
                }
            })
    }, [searchText])

    return [cocktails, searchText, searchHandler, searchNotFound];
}
export default useProducts;