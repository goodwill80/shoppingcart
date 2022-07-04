import React, {useContext} from 'react'
import { AppContext } from './Context'

function CartItem({ id, title, price, img, amount }) {
    const { remove, increase, decrease } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between">
        {/* Image */}
        <img className="h-40 pr-4" src={img} alt={title} />
        {/* Title, Price and Remove Btn */}
        <div className="w-screen flex flex-col text-left h-32 space-y-2 pl-8">
            <h4 className="font-bold capitalize">{ title }</h4>
            <p>${price}</p>
            <button className="cursor-pointer text-blue-700 hover:underline hover:text-yellow-400 w-16"
               onClick={ ()=>remove(id) }>
                Remove
            </button>
        </div>
        {/* Increase */}
        <div className="h-10 w-10 flex flex-col justify-center pb-8 md:h-20 md:w-20">
        <button className='amount-btn' onClick={()=>increase(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <p>{amount}</p>
        {/* Decease */}
        <button className='amount-btn' onClick={()=>decrease(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
        </div>
    </div>
  )
}

export default CartItem
