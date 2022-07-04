import { createContext, useReducer, useState, useEffect } from 'react'
import products from './data';
import CartReducer from './Reducer';


const AppContext = createContext();

const initialCart = {
    products: products,
    isLoading: false,
    value: 0.00,
    total: 0,
}

function AppContextProvider(props) {

    const [ cart, dispatch ] = useReducer(CartReducer, initialCart);

    const clearCart = ()=> {
        dispatch({ type: "CLEAR_CART" })
    }

    const remove = (id) => {
        dispatch({ type: "REMOVE", payload: id });
    }

    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: id });
    }

    const decrease = (id) => {
        dispatch({ type: "DECREASE", payload: id });
    }

    useEffect(()=>{
        dispatch({type: "GET_TOTAL"})
    },[cart.products])

  return (
    <AppContext.Provider value={{...cart, clearCart, remove, increase, decrease}}>
      { props.children}
    </AppContext.Provider>
  )
}

export {AppContextProvider, AppContext };
