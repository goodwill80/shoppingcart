import React from 'react'

function CartItem({ id, title, price, img, amount }) {
  return (
    <div className="flex items-center justify-between">
        <img className="h-40 pr-4" src={img} alt={title} />
        <div className="w-screen flex flex-col text-left h-32 space-y-2 pl-8">
            <h4 className="font-bold capitalize">{ title }</h4>
            <p>${price}</p>
            <p className="cursor-pointer text-blue-700 hover:underline hover:text-yellow-400">Remove</p>
        </div>
        <div className="h-10 w-10 flex flex-col justify-center pb-8 md:h-20 md:w-20">
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <p>{ amount }</p>
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
        </div>
    </div>
  )
}

export default CartItem
