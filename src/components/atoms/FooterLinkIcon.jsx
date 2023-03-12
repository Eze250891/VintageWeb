
import React from 'react'

const FooterLinkIcon = (props) => {

  return (
    <>
    <a className='self-center py-3' href={props.link}> <img className='h-10 md:h-16 md:hover:scale-125 md:transition md:duration-300 md:ease-in-out md:px-8' src={props.icono} alt="imagen" /></a>
    </>
  )
}

export default FooterLinkIcon