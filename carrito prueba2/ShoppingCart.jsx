import { TYPES } from "../actions/action"

import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer"
import Product from "./Product"
import CartItem from "./CartItem"



const ShoppingCart = () => {
    
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
        
        const {products, cart} = state;

        const addtoCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

        const delFromCart = (id) => dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})

        const cleanCart= () => {}
        

  return (
    <>
        <h2>Carrito de pro</h2>
        <h3>Productos</h3>
        <div className=" flex flex-wrap justify-between gap-9 bg-primary ">
          {
            products.map(product => <Product
             key={product.id}
             product={product}
             addtoCart={addtoCart}
            />)
          }
           

        </div>
        <h3>Carrito</h3>
        <div className="bg-primary">
          {
            cart.map((item, index) => <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
            />)
          }
          

        </div>
        <button onClick={() => cleanCart() }> Limpiar carrito</button>
    </>
  )
}

export default ShoppingCart