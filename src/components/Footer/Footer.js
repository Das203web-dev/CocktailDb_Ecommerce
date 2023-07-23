import React from 'react';
// import footerSvg from './svg/footerSvg.svg';
import { FaArrowUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { IconName } from "react-icons/fa6";




// library.add(faTwitt)

const Footer = () => {
    const goupBtnStyle = {
        bottom: '50px',
        position: 'fixed',
        right: '10px',
        // padding: '2px',
        color: 'black',
        background: 'transparent'
    }
    const goupButton = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const svg = {
        // backgroundImage: `url(${footerSvg})`,
        background: 'linear-gradient(to right, #808080, #555555 )',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: 'auto'
    };
    return (
        <footer style={svg} className='py-4 text-amber-200'>
            <div className=' md:flex  justify-between'>
                <div className='md:flex flex-auto w-full justify-right'>
                    <div className='w-full'>
                        <h2 className='text-2xl font-bold my-2'>Our Company</h2>
                        <address className='not-italic mb-4'>
                            <p className='my-2'>North Badda, Dhaka</p>
                            <p className='my-2'>Road No.26</p>
                            <p className='my-2'>12 no. Building</p>
                            <p>Ph. 01765754345</p>
                        </address>
                    </div>
                    <div className='w-full'>
                        <h2 className='my-2 font-bold text-2xl'>Privacy policy</h2>
                        <p className='my-2'>Lorem ipsum dolor</p>
                        <p className='my-2'>Lorem ipsum dolor</p>
                        <p className='my-2'>Lorem ipsum dolor</p>
                        <p className='my-2'>Lorem ipsum dolor</p>
                    </div>
                    <div className='w-full'>
                        <h1 className='my-2 font-bold text-2xl'>Our Services</h1>
                        <p className='my-2'>Lorem ipsum</p>
                        <p className='my-2'>Lorem ipsum</p>
                        <p className='my-2'>Lorem ipsum</p>
                        <p className='my-2'>Lorem ipsum</p>
                        <p className='my-2'>Lorem ipsum</p>
                    </div>
                    <div className='w-full flex justify-normal items-center flex-col text-center'>
                        <h1 className='my-2 text-2xl font-extrabold text-justify  p-2'>Follow us</h1>

                        <div className='flex justify-center  items-center gap-2'>
                            <FaFacebook className='w-6 h-6'></FaFacebook>
                            <FaLinkedin className='w-6 h-6'></FaLinkedin>
                            <FaGithub className='w-6 h-6'></FaGithub>
                            <FaInstagram className='w-6 h-6'></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-around items-center mt-4'>
                <small>cocktail.co All right Reserved</small>
                <small>Terms of services | Privacy policy | Refund policy | Accessibility policy</small>
                <button onClick={goupButton} className='font-extrabold text-2xl' style={goupBtnStyle}><FaArrowUp></FaArrowUp></button>
            </div>
        </footer >
    );
};

export default Footer;