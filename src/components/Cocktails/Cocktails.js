import React from 'react';
import { addToDb, deleteCart, removeItem } from '../utilities/localStorage'
import './Cocktails.css';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import CocktailDetails from './CocktailDetails/CocktailDetails';
import { FaTrash } from 'react-icons/fa';
// import Cart from '../Cart/Cart';

const Cocktails = () => {
    //importing custom hook that is made by me......
    const [cocktails, searchText, searchHandler, searchNotFound] = useProducts()

    //cart state setup and update implementation.....
    const [cart, setCart] = useCart(cocktails)
    const handleAddTocart = (product) => {
        const existProduct = cart.find((newSelectedProduct) => product.idDrink === newSelectedProduct.idDrink);

        if (existProduct) {
            const updatedCart = cart.map((item) => {
                if (item.idDrink === existProduct.idDrink) {
                    return { ...item, quantity: parseInt(item.quantity + 1) };
                }
                return item;
            });

            setCart(updatedCart);
        } else {
            const newProduct = { ...product, quantity: 1 };
            const newCart = [...cart, newProduct];
            setCart(newCart);
        }

        addToDb(product.idDrink);
    };

    const removeItemFromCart = (id) => {
        removeItem(id);
        //updating cart......
        const updatedCart = cart.filter(product => product.idDrink !== id);
        setCart(updatedCart)
    }
    //function for clearing the whole cart.....
    const clearCart = () => {
        deleteCart();
        setCart([])
    }

    return (
        <div className='mt-10 p-10'>

            <h1 className='text-4xl'>THIS IS OUR <br /><span className='text-amber-500 font-bold'>COCKTAILS</span> COLLECTION</h1>
            <br />
            <input onChange={searchHandler} className='border-2 text-white placeholder: border-teal-950 p-2 rounded bg-teal-950 w-1/2 hover:bg-teal-50 hover:text-slate-950 focus:ring-1' type="search" value={searchText} name="" id="" placeholder='Search Your Favorite Drink' />
            {searchNotFound && <p className='text-4xl text-red-600 font-bold'>Product Not Found</p>}
            <div className='grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4  gap-4'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 md:col-span-2  lg:col-span-3 items-center gap-5 mt-10'>
                    {
                        cocktails.map(cocktail => <CocktailDetails handleCart={handleAddTocart} key={cocktail.idDrink} cocktail={cocktail}></CocktailDetails>)
                    }

                </div>

                <div className=' text-4xl text-center col-auto md:col-span-1 lg:col-span-1 mt-10 text-black font-semibold relative md:sticky min-h-[500px] h-max top-0 mb-8 w-full p-4 rounded-xl cart-div'>
                    <h1>Cart</h1>
                    <p className='font-semibold text-xl'>Selected Items : {cart.length}</p>
                    <div className='w-full'>
                        {cart.map(pro => {
                            return <div key={pro.idDrink} className='bg-white gap-2 p-2 flex items-center justify-between shadow shadow-slate-900 my-4 w-full rounded-lg'>
                                <img className='w-20 h-20 rounded-lg' src={pro.strDrinkThumb} alt="" />
                                <div className='font-light'>
                                    <p className="text-xl font-medium">Id : {pro.idDrink}</p>
                                    <p className="text-sm">Name : {pro.strDrink}</p>
                                    <p className="text-sm">Categorty : {pro.strCategory}</p>
                                    {/* <p className="text-sm">Quantity : {pro.quantity}</p> */}
                                </div>
                                <div>
                                    <button onClick={() => removeItemFromCart(pro.idDrink)} className='text-red-600'><FaTrash /></button>
                                </div>
                            </div>;
                        }
                        )}
                    </div>
                    <div className='absolute -bottom-5 left-0 w-full'>
                        <button onClick={clearCart} className='bg-red-600 mt-4 text-white rounded-lg p-2 text-xl hover:bg-transparent hover:text-black border border-black'>Clear Cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cocktails;