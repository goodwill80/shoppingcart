import { createContext, useReducer, useState, useEffect } from 'react'
import products from './data';


const AppContext = createContext();

function AppContextProvider(props) {

    const [ cart, setCart ] = useState(products);

  return (
    <AppContext.Provider value={{cart}}>
      { props.children}
    </AppContext.Provider>
  )
}

export {AppContextProvider, AppContext };
