
import React from 'react'
import usuario from '../../graphics/imagenes/Varios/usuario.jpg'
import { useState } from 'react'
import CartItem from "../atoms/CartItem"

const Navbar = (props) => {

  const cart = props.cart
  const delFromCart= props.delFromCart
  const clearCart= props.clearCart
  


  const [isVisible, setIsVisible] = useState(false);
   const toggleVisibility = () =>{
     setIsVisible(current => !current);
  }

  return (
    <>
    <nav className="
  relative
  md:sticky top-0
  z-40
  w-full
  h-auto

  flex flex-col
  items-center
  justify-between
  py-2
  bg-navbarColor
  text-gray-500
  navbar navbar-expand-lg navbar-light
  ">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button className="
      navbar-toggler
      sm:z-40
      border-0
      py-2
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
 className="w-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#957C65"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <a className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="!#">
    <img src="./icon.png"  alt=""

      loading="lazy" className='h-9'/>
  </a>
  {/* <!-- Left links --> */}
  <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary font-bold text-lg" href="!#">Vintage Gentleman</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary font-bold text-lg" href="!#">Guia de talles</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary font-bold text-lg" href="!#">Sucursales</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary font-bold text-lg" href="!#">Nosotros</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary font-bold text-lg" href="!#">Contacto</a>
    </li>
  </ul>
  {/* <!-- Left links --> */}
  </div>
  {/* <!-- Collapsible wrapper --> */}

  {/* <!-- Right elements --> */}
  <div className="flex items-center relative">

<button onClick={()=>toggleVisibility()}>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
     className="" role="img" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#957C65" d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path>
    </svg>
</button>
  



 
  <div className="dropdown relative ml-3">
    <a className="dropdown-toggle flex items-center hidden-arrow" href="!#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img src={usuario} className="rounded-full h-12"
         alt="" loading="lazy" />
    </a>
  
  </div>
  </div>
  {/* <!-- Right elements --> */}
  </div>
    { isVisible && (


      <div className='bg-[#FDD59A] flex flex-col items-center justify-center w-full h-auto relative '>
        <div className=''>
        <h3 className='underline decoration-1 text-lg font-bold'>Tu carrito</h3>
        </div>
        <div className="text-center font-bold text-sm m-1 md:flex md:flex-row md:flex-wrap  justify-center grid grid-cols-4  ">
          {
            cart.map((item, index) => <CartItem 
                key={index}
                item={item}
                delFromCart={delFromCart}
            />)
          }
          </div>
          {/* <div className=''>
          <button onClick={() => clearCart()} className="border-black border-2 rounded-md font-bold text-sm mb-3"> Limpiar carrito</button>
          </div> */}
    </div>
  
    )

    }
</nav>
    </>
  )
}
 
export default Navbar




