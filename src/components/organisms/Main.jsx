import React from 'react'
import banner from '../../graphics/imagenes/banners/banner.jpg'



const Main = () => {
  return (
    <>
    <div className='flex items-center'>
      <img src={banner} alt="" className='max-h-full'/>
        <div className='absolute ml-2 mt-16 2xl:mt-56 lg:mt-46 md:mt-40 xl:ml-3 lg:ml-3 md:ml-1  '>
          <h1 className=' text-2xl sm:text-3xl sm:ml-5 sm:mt-9 md:text-5xl lg:text-6xl 2xl:text-7xl 2xl:ml-9  text-fontPrimary '>
            Vintage Shop
          </h1>
        </div>
    </div>
    </>
   
  )
}

export default Main