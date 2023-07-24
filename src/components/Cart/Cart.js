import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';


const Cart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleIncreaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => {
            if (item.idDrink === productId) {
                return { ...item, quantity: parseInt(item.quantity + 1) };
            }
            return item;
        });
        setCart(updatedCart);
    };
    const handleDecreaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => {
            if (item.idDrink === productId) {
                return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
            }
            return item;
        });
        setCart(updatedCart);
    };
    return (
        <section className='bg-slate-100 w-full'>
            <h1 className='text-2xl font-bold'>Cart Page</h1>
            <p>{cart.length}</p>
            <div className='flex w-full rounded-lg gap-4 my-4 border-2 shadow shadow-black justify-around items-center p-2'>
                <div className='sm:w-full bg-transparent'>
                    {cart.map(p =>
                        <div className='flex sm:w-full p-4 rounded-lg gap-4 my-4 border-2 shadow shadow-black justify-center items-center'>
                            <p>{p.idDrink}</p>
                            <img className='w-20 h-20' src={p.strDrinkThumb
                            } alt="" />
                            <p>Quantity : {p.quantity}</p>
                            <button onClick={() => handleIncreaseQuantity(p.idDrink)}><FaPlus></FaPlus></button>
                            <button onClick={() => handleDecreaseQuantity(p.idDrink)}><FaMinus></FaMinus></button>
                        </div>
                    )}
                </div>
                <div className=' text-4xl text-center col-auto md:col-span-1 lg:col-span-1 mt-10 text-black font-semibold relative md:sticky min-h-[500px] h-max top-0 mb-8 w-96 p-4 max-[700px]:hidden rounded-xl cart-div'>
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
                                    <button className='text-red-600'><FaTrash /></button>
                                </div>
                            </div>;
                        }
                        )}
                    </div>
                    <div className='absolute -bottom-5 left-0 w-full'>
                        <button className='bg-red-600 mt-4 text-white rounded-lg p-2 text-xl hover:bg-transparent hover:text-black border border-black'>Clear Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;