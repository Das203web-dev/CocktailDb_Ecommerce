import React from 'react';
import aboutImg1 from './images/aboutImg1.jpg'

const AboutUs = () => {
    return (
        <div className='my-20'>
            <h1 className='text-4xl mb-10'><span className='text-amber-500'>ABOUT</span> US </h1>
            <div className='md:flex justify-between items-center'>
                <div className='w-full p-4'>
                    <img className='h-85 rounded-xl' src={aboutImg1} alt="" />
                </div>
                <div className='w-full p-4 text-justify'>
                    <h1 className='text-2xl mb-6'>Our <span className='text-amber-500'>COMPANY</span></h1>
                    <p className='first-letter:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero debitis optio fugiat illum cumque totam adipisci labore incidunt? Doloremque, quibusdam consequuntur! Dignissimos aperiam quaerat iste voluptas consectetur praesentium obcaecati architecto! Temporibus numquam, quam esse ullam tempora ab corporis libero tenetur praesentium error accusamus sapiente perferendis consequuntur corrupti cumque fuga consequatur mollitia veritatis laudantium quis officia magni maxime, itaque voluptatibus. Possimus repellendus doloremque numquam laudantium in ducimus hic, soluta quis iure culpa repellat quam. Doloremque, consectetur hic! Alias animi quos, dolor perspiciatis deleniti eaque possimus dicta, a repellat amet tempora, obcaecati voluptatem illum saepe quis numquam minima asperiores ex repudiandae vitae.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;