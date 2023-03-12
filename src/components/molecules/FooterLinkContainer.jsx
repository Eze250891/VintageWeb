



import React from 'react'
import FooterLinkIcon from '../atoms/FooterLinkIcon'

import logoEmail from '../../graphics/imagenes/iconos/iconoEmail.png'
import logoFacebook from '../../graphics/imagenes/iconos/iconoFacebook.png'
import logoInstagram from '../../graphics/imagenes/iconos/iconoInstagram.png'
import logoTwitter from '../../graphics/imagenes/iconos/iconoTwitter.png'
import logoWhatsapp from '../../graphics/imagenes/iconos/iconoWhatsapp.png'




const FooterLinkContainer = () => {
  return (
    <div className='bg-white flex flex-col h-96 justify-center
                    
                    md:flex-row md:flex-wrap md:h-48'>
                        
    <FooterLinkIcon icono={logoEmail} link="https://www.google.com.ar/?hl=es"/>
    <FooterLinkIcon icono={logoFacebook} link="https://www.facebook.com/" />
    <FooterLinkIcon icono={logoInstagram} link="https://www.instagram.com/" />
    <FooterLinkIcon icono={logoTwitter} link="https://www.twitter.com/" />
    <FooterLinkIcon icono={logoWhatsapp} link= "https://www.whatsapp.com/"/>
    </div>
  )
}

export default FooterLinkContainer