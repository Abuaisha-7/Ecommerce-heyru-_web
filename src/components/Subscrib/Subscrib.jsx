import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    heigth: '100%',
    width: '100%',
};

const Subscrib = () => {
  return (
    <div data-aos="zoom-in"  className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-2xl mx-auto '>
            <h1 data-aos="fade-up"  className='text-2xl !text-center sm:text-left sm:text-4xl font-bold'>Get Notified About New Products</h1>
        </div>
        <input 
        data-aos="fade-up" 
        type="text" 
        placeholder='Enter Your Email'
        className='w-full p-4'
        />
        </div>
    </div>
  )
}

export default Subscrib