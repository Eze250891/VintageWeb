import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrousel from '../atoms/ImageCarrousel';

import CHAROL_NEGRO from '../../graphics/imagenes/productos/charol_negro.jpg'
import CHAROL_BLANCO from '../../graphics/imagenes/productos/charol_blanco.jpg'
import CHAROL_COMBINADO from '../../graphics/imagenes/productos/charol_combinado.jpg'
import LEONETTI_FARO from '../../graphics/imagenes/productos/leonetti_faro1.jpg'
import LEONETTI_FLORENCIA from '../../graphics/imagenes/productos/leonetti_florencia1.jpg'
import LEONETTI_KENAI from '../../graphics/imagenes/productos/leonetti_kenai1.jpg'
import LEONETTI_MORRISON from '../../graphics/imagenes/productos/leonetti_morrison1.jpg'
import LEONETTI_NEGRO from '../../graphics/imagenes/productos/leonetti_negro1.jpg'
import LEONETTI_ROMA from '../../graphics/imagenes/productos/leonetti_roma1.jpg'
import LEONETTI_RONALD from '../../graphics/imagenes/productos/leonetti_ronald1.jpg'



const options={
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Anterior", "Siguiente"],
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2,
            margin: 10,
            navText: ["Anterior", "Siguiente"],
        },
        400: {
            items: 2,
            margin:10,
            navText: ["Anterior", "Siguiente"],
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};


const Carrousel = () => {
   
   
  return (
    <>
    
    <div className='flex justify-center mt-5'>
        <h3 className='text-2xl font-bold text-fontSecondary'> Destacado </h3>
    </div>
    <div>

        <OwlCarousel className='owl-theme bg-white' {...options}>
        <div className='item flex justify-center '>
            <ImageCarrousel image={CHAROL_NEGRO}/>
        </div>
        <div className='item flex justify-center '>
            <ImageCarrousel image={CHAROL_BLANCO}/>
        </div>
        <div className='item flex justify-center '>
            <ImageCarrousel image={CHAROL_COMBINADO}/>
        </div>
        <div className='item flex justify-center '>
            <ImageCarrousel image={LEONETTI_FARO}/>
        </div>
        <div className='item flex justify-center '>
            <ImageCarrousel image={LEONETTI_FLORENCIA}/>
        </div>
        <div className='item flex justify-center '>
            <ImageCarrousel image={LEONETTI_KENAI}/>
        </div>
        <div className='item flex justify-center'>
            <ImageCarrousel image={LEONETTI_MORRISON}/>
        </div>
        <div className='item flex justify-center'>
            <ImageCarrousel image={LEONETTI_NEGRO}/>
        </div>
        <div className='item flex justify-center'>
            <ImageCarrousel image={LEONETTI_ROMA}/>
        </div>
        <div className='item flex justify-center'>
            <ImageCarrousel image={LEONETTI_RONALD}/>
        </div>
    
        </OwlCarousel>
    </div>
    </>
    
    
    
    
  )
}

export default Carrousel