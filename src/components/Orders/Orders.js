import React from 'react';
import CocktailDetails from '../Cocktails/CocktailDetails/CocktailDetails';
import { FaTrash } from 'react-icons/fa';
import Cart from '../Cart/Cart';


const Orders = (props) => {
    const { cart, cocktails, handleAddTocart, removeItemFromCart, clearCart } = props;
    console.log(cart)

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4  gap-4'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:col-span-2  lg:col-span-3 items-center gap-5 mt-10'>
                {
                    cocktails.map(cocktail => <CocktailDetails handleCart={handleAddTocart} key={cocktail.idDrink} cocktail={cocktail}></CocktailDetails>)
                }

            </div>
            <Cart cart={cart}></Cart>
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
    );
};

export default Orders;