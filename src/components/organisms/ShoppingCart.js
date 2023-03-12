import { TYPES } from "../../actions/action";

import { useEffect, useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";

import CartItem from "../atoms/CartItem";
import CardSeccion from "./CardSeccion";

import React from "react";
import Navbar from "./navbar";
import axios from "axios";
import Main from "./Main";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;
  // ACA IMPORTO DEL JSONSERVER .  Se hace ASINCRONICA porque puede tardar
  //cart.map((cartItem, i)=> console.log(cartItem.id))
  const updateState = async () => {
    //PASO 1 Declaro los enpoint a usar
    const URL_PRODUCTS = "http://localhost:5000/products";
    const URL_CART = "http://localhost:5000/cart";
    //PASO 2 -> Hago la petición al endpoint con axios. el await implica que puede tardar
    const resProducts = await axios.get(URL_PRODUCTS);
    const resCart = await axios.get(URL_CART);

    //PASO 3 -> las cosas que devuelve axios vienen como objetos. lo que me interesa es la .data
    const productList = resProducts.data;
    const cartList = resCart.data;

    dispatch({
      type: TYPES.READ_STATE,
      payload: { products: productList, cart: cartList },
    });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = async (product) => {
    // COMO LA FUNCION ADDTOCART TIENE PETICIONES ESTA BUENO PONERLE EL ASYNC PARA PODER USAR EL AWAIT EN DICHAS PETIS

    const isProductInCart = cart.find((item) => item.id === product.id);
    // Si el producto está en el carrito incremento en 1
    if (isProductInCart) {
      product.quantity = isProductInCart.quantity + 1;
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(product),
      };
      const res = await axios(
        `http://localhost:5000/cart/${product.id}`,
        options
      );
    } else {
      // Si no esta en el carrito, seteo la cantidad en 1 y lo agrego
      product.quantity = 1;

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(product),
      };
      const res = await axios("http://localhost:5000/cart", options);
    }

    dispatch({ type: TYPES.ADD_TO_CART, payload: product.id });
    alert("Producto Agregado!");
  };

  const delFromCart = (item, all = false) => {


    const decrementOneElementFromCart = async (item) => {
      // Esta funcion me permite borrar solo 1 item del carrito
      const itemToModify= {
        // Creo una copia del item para poder cambiar la cantidad, sin tener que afectar al item original
        id: item.id,
        img: item.img,
        title: item.title,
        instalments : item.instalments,
        price : item.price,
        product : item.product,
        quantity : item.quantity-1
      }
       const options = {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         data: JSON.stringify(itemToModify),
       };
       const res = await axios(`http://localhost:5000/cart/${itemToModify.id}`,options);
    };


    const delOneElementFromCart = async (item) =>{
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(`http://localhost:5000/cart/${item.id}`,options);
    }
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: item.id });
      delOneElementFromCart(item)
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: item.id });
      if (item.quantity > 1) {
        decrementOneElementFromCart(item);
      } else {
        
        delOneElementFromCart(item)
      }
    }
    alert("Producto Eliminado del Carrito")
  };

  // CAMBIE ACA
  //const clearCart= () => dispatch ({type: TYPES.CLEAR_CART})

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    dispatch({ type: TYPES.UPDATE_STATE });
  };

  return (
    <>
      <Navbar cart={cart} delFromCart={delFromCart} clearCart={clearCart} />
      <Main/>
      <CardSeccion products={products} addToCart={addToCart} />
      
    </>
  );
};

export default ShoppingCart;
