
import React from "react";

const Product = ({product, addtoCart}) => {

  const {id, name, price} = product;
  
  return (
    <>
    <div >
        <h4>{name}</h4>
        <h5>$ {price}</h5>
        <button className='border' onClick={() => addtoCart(id)}>Agregar</button>
    </div>
    </>
  )
}

export default Product