import { createContext, useReducer, useState, useEffect } from 'react'
import products from './data';
import CartReducer from './Reducer';

const url = 'https://course-api.com/react-useReducer-cart-project'
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
        dispatch({ type: "LOADING"})
        let load = setTimeout(()=>{
            dispatch({ type: "STOP_LOADING"});
        }, 1000)
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

    const fetchData = async()=> {
        dispatch({ type: "LOADING" });
        const response = await fetch('https://course-api.com/react-useReducer-cart-project');
        const data = await response.json();
        dispatch({ type: "DISPLAY_ITEMS", payload: data });
    }

    useEffect(()=>{
        fetchData();
        const loading = setTimeout(()=>{
            dispatch({ type: "STOP_LOADING"});
        }, 1000)
    }, []);

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
