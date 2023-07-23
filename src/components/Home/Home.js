import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';
import image4 from './image/image4.jpg';
// import image5 from './image/image5.jpg';
import image6 from './image/image6.jpg';
// import image7 from './image/image7.jpg';
import image8 from './image/image8.jpg';
import cocktail1 from './image/cocktail/cocktail1.jpg';
import cocktail2 from './image/cocktail/cocktail2.jpg';
import './Home.css';
import { FaAngleRight, FaAtom, FaCat, FaHeart, FaChild, FaVirus } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Home = () => {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '500px',
        // width: '100%',
    };


    const slideImages = [
        {
            url: image1,
            caption: 'WELCOME TO OUR COCKTAIL BAR'

        },
        {
            url: image2,
            caption: 'HERE YOU WILL GET LOTS OF COCKTAIL'
        },
        {
            url: image3,
            caption: 'BEER COCKTAILS'
        },
        {
            url: image4,
            caption: 'SOFT DRINK COCKTAIL'
        },
        // {
        //     url: image5,
        //     caption: 'HOT COCKTAIL'
        // },
        {
            url: image6,
            caption: 'COCKTAIL KING'
        },
        // {
        //     url: image7,
        //     caption: 'COCKTAIL KING'
        // },
        {
            url: image8,
            caption: 'COCKTAIL KING'
        }
    ];

    return (
        <body>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className='md:px-10 lg:px-64 xl:px-96 flex justify-center items-center' key={index}>
                        <div className='w-full' style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
            <div className='p-6'>
                <section className='my-10 flex justify-center items-center flex-col'>
                    <div className='mb-10'>
                        <h1 className='text-4xl'>HAVE <span className='text-6xl text-amber-500'>A</span> LOOK</h1>
                    </div>
                    <div className='border-8 border-s-red-500 border-e-neutral-950 border-t-slate-500 border-b-amber-500 p-4 rounded-full animate-spin-slow duration-75'>
                        <div className='border-4 border-emerald-900 p-4 rounded-full animate-none '>
                            <img className='border rounded-full w-52 h-52 z-10' src={cocktail1} alt="cocktail_image" />
                        </div>
                    </div>
                    <p className='mt-10 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus rem a aliquam consectetur rerum ut cum non! Omnis dolor, nihil aliquid aspernatur fugiat voluptatum eum beatae aperiam fuga odit reiciendis magni quis tenetur, impedit non voluptate quia quas magnam. Minus, natus delectus obcaecati dolor quia et praesentium cum, numquam quidem vero nemo eius cumque. Architecto inventore aspernatur illum minima!</p>
                </section>
                <section className='md:flex justify-evenly flex-row-reverse items-center text-justify '>
                    <div className='w-full'>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate reiciendis recusandae possimus qui. Voluptates magnam sunt ratione suscipit unde animi fuga numquam fugiat sint doloribus, nisi expedita, rerum qui deserunt veniam. Fuga explicabo omnis, corrupti voluptatibus iusto ab voluptatem nulla consequuntur, aperiam nobis unde est incidunt numquam quia dolores neque labore molestias. Rem aliquam, optio eos expedita eaque adipisci numquam fuga sit et eum nihil doloribus quia maxime deleniti voluptas qui voluptatum exercitationem neque quo explicabo provident! Qui voluptas.</h1>
                    </div>
                    <div className='w-full sm:mt-8'>
                        <div class="flex justify-center -space-x-44 relative">
                            <div class=" relative bg-blend-multiply rounded-full w-60 h-60 bg-orange-300 ...">
                                <img className='absolute top-8 left-8 w-44 h-44 rounded-full' src={cocktail2} alt="cocktail_2" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="multiple-border"><h1 className='text-3xl font-semibold'>Grab This Exciting Offer</h1></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nesciunt cum ea omnis nulla delectus esse expedita iusto recusandae quae.</p>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-8 mt-16 '>
                        <div className='rounded-2xl module-border-wrap '>
                            <div className=' bg-orange-100 rounded-2xl relative p-4 justify-center items-center module'>
                                <div className=' rounded-full text-6xl'>
                                    <Link className=' text-orange-900 font-extrabold flex justify-center items-center'><FaAtom></FaAtom></Link>
                                </div>
                                <h2 className='text-3xl font-bold text-orange-900'>Title Here</h2>
                                <p className='mt-4 text-orange-900'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <div className='flex justify-center items-center text-orange-900'>
                                    <p className='text-2xl '><FaAngleRight></FaAngleRight></p>
                                    <p className='text-orange-900'>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center text-orange-900'>
                                    <p className='text-2xl '><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center gap-3 mt-4'>
                                    <button>
                                        <FaHeart className='text-3xl text-orange-900'></FaHeart>
                                    </button>
                                    <button className='bg-orange-900 px-4 py-1 rounded-2xl border-2 text-white border-orange-900 font-semibold hover:bg-transparent hover:text-orange-900'>Button</button>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl module-border-wrap '>
                            <div className=' bg-orange-100 rounded-2xl relative p-4 justify-center items-center module'>
                                <div className=' rounded-full text-6xl'>
                                    <Link className=' text-orange-500 font-extrabold flex justify-center items-center'><FaCat></FaCat></Link>
                                </div>
                                <h2 className='text-3xl font-bold text-orange-500'>Title here</h2>
                                <p className='mt-4 text-orange-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <div className='flex justify-center items-center text-orange-500'>
                                    <p className='text-2xl'><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center text-orange-500'>
                                    <p className='text-2xl'><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center gap-3 mt-4'>
                                    <button>
                                        <FaHeart className='text-3xl text-orange-500 font-bold'></FaHeart>
                                    </button>
                                    <button className='bg-orange-500 px-4 py-1 rounded-2xl border-2 text-white border-orange-500 font-semibold hover:bg-transparent hover:text-orange-500'>Button</button>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl module-border-wrap'>
                            <div className=' bg-orange-100 rounded-2xl relative p-4 justify-center items-center module'>
                                <div className=' rounded-full text-6xl'>
                                    <Link className=' text-orange-700 font-extrabold flex justify-center items-center'><FaVirus></FaVirus></Link>
                                </div>
                                <h2 className='text-3xl font-bold text-orange-700'>Title Here</h2>

                                <p className='mt-4 text-orange-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <div className='flex justify-center items-center text-orange-700'>
                                    <p className='text-2xl'><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center text-orange-700'>
                                    <p className='text-2xl'><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center gap-3 mt-4'>
                                    <FaHeart className='text-3xl text-orange-700'></FaHeart>
                                    <button className='bg-orange-700 px-4 py-1 rounded-2xl border-2 text-white border-orange-700 font-semibold hover:bg-transparent hover:text-orange-700'>Button</button>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl module-border-wrap'>
                            <div className=' bg-orange-100 rounded-2xl relative p-4 justify-center items-center module'>
                                <div className=' rounded-full text-6xl'>
                                    <Link className=' text-blue-900 font-extrabold flex justify-center items-center'><FaChild></FaChild></Link>
                                </div>
                                <h2 className='text-3xl font-bold text-blue-900'>Title Here</h2>

                                <p className='mt-4 text-blue-900'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <div className='flex justify-center items-center text-blue-900'>
                                    <p className='text-2xl '><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center text-blue-900'>
                                    <p className='text-2xl '><FaAngleRight></FaAngleRight></p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className='flex justify-center items-center gap-3 mt-4'>
                                    <FaHeart className='text-3xl text-blue-900'></FaHeart>
                                    <button className='bg-blue-900 px-4 py-1 rounded-2xl border-2 text-white border-blue-900 font-semibold hover:bg-transparent hover:text-blue-900'>Button</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className=' relative mt-10 bg-transparent'>
                    <div className=' p-2'>
                        <h1 className='text-4xl font-bold mb-5'>Lets <span className='text-amber-500 font-bold'>connect</span></h1>
                        <input className='border-2 px-2 border-amber-800 rounded-lg mb-2' type="email" name="" id="" placeholder='Email' /><button className='bg-orange-700 px-4 rounded-lg ml-2 border-2 text-white border-orange-700 font-semibold hover:bg-transparent hover:text-orange-700'>Send</button>
                    </div>
                </section>
            </div>
        </body >
    );
};

export default Home;
