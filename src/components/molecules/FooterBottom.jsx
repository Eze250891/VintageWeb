
import logoFooter from '../../graphics/imagenes/iconos/dandy_1.jpg'


import React from 'react'

const FooterBottom = () => {
  return (
    <div className='bg-darkGrey h-96'>
        <div className='w-full flex justify-center h-2/4'>
            <img src={logoFooter} alt="logoFooter" className='h-full' />
        </div>
        <div className='h-2/4'>
            <div className='bg-darkGrey h-3/4 flex justify-evenly'>
                <div className=''>
                    <p className='p-5 text-center text-pastelColor font-mono text-sm'>
                        Sucursales: <br />
                        Calle Falsa 123. <br />
                        Springfield.
                    </p>
                </div>
                <div className=''>
                    <p className='p-5 text-center text-pastelColor font-mono text-sm'>
                        Teléfonos: <br />
                        0303 - 456 <br />
                        011 - 111222 <br /> <br />
                    </p>
                </div>
            </div>

            <div className='bg-darkGrey text-center h-1/4'>
                <p className=' text-pastelColor font-mono text-sm'>
                    Email: vintageGentlemen@gmail.com
                </p>
                <p className=' text-pastelColor font-mono text-xs'>
                    Powered By: La estación de Poder
                </p>
            </div>
        </div>


    </div>
  )
}

export default FooterBottom