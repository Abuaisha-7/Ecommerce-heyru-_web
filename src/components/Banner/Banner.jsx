import React from 'react'
import BannerImg from '../../assets/women/women2.png'


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* image section  */}
                <div>
                    <img src={BannerImg} alt="" />
                </div>
                {/* text detail section  */}

            </div>
        </div>
    </div>
  )
}

export default Banner