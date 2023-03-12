


import React from 'react'

const ImageCarrousel = (props) => {
  return (
    <div className='bg-white w-48 h-48 flex items-center border-black rounded-sm'>
        <img className='w-32' src={props.image} alt="" />
        </div>
  )
}

export default ImageCarrousel