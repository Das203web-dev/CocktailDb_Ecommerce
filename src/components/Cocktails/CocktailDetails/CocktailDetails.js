import React, { useState } from 'react';
import { FaCartPlus, FaThumbsUp } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { Box, Modal, Typography } from '@mui/material';
import './CocktailDeails.css';

const CocktailDetails = (props) => {
    const { handleCart, cocktail } = props;
    // console.log(cocktail)
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strCategory, strInstructions } = cocktail;
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        // navigate('/cocktails/' + idDrink)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='bg-white flex flex-col justify-center items-center p-4 rounded shadow-lg shadow-slate-600 h-full relative'>
            <div className='mb-28 w-full'>
                <img className='w-full h-60 rounded' src={strDrinkThumb} alt="" />
                <h1 className='text-2xl'>Drink name: {strDrink}</h1>
                <h2>{strAlcoholic}</h2>
                <p>Category: {strCategory}</p>
            </div>
            <div className='flex flex-col justify-between w-full absolute items-center bottom-0 p-4'>
                <button onClick={handleClick} className='mb-2 bg-teal-900 border text-white hover:bg-transparent hover:text-black hover:border-slate-600 p-2 rounded-lg my-2'>
                    About {strDrink}
                </button>
                <div className='flex justify-between items-center w-full'>
                    <div className='btn justify-center items-center flex left-0'>
                        <button className='text-2xl' onClick={() => handleCart(cocktail)}>
                            <FaCartPlus />
                        </button>
                    </div>
                    <div className='btn justify-center items-center flex right-0'>
                        <button className='text-2xl'>
                            <FaThumbsUp />
                        </button>
                    </div>
                </div>
            </div>
            <Modal className=' relative top-1/2 left-1/2'
                key={idDrink}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='xl:w-96 w-80 h-auto' sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', borderRadius: '5px', boxShadow: 24, p: 4 }}>
                    <Typography className='text-center' id="modal-modal-title" variant="h4" component="h2">
                        <span>Drink Name</span>: {strDrink}
                    </Typography>
                    <img className='w-full h-52 flex justify-center items-center rounded-lg' src={strDrinkThumb} alt="" />
                    <Typography className='text-center' id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className='font-bold'>Category</span> : {strCategory}
                    </Typography>
                    <Typography className='text-center' id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className='font-bold'>Is Alcoholic</span> : {strAlcoholic}
                    </Typography>
                    <Typography className='text-center' id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className='font-bold'>Instructions</span> : {strInstructions}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default CocktailDetails;
