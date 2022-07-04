import React from 'react'

function CartItem({ id, title, price, img, amount }) {
  return (
    <div className="flex items-center">
        <img className="h-40" src={img} alt={title} />
        <div className="w-screen flex flex-col text-left h-32 space-y-2">
            <h4 className="font-bold capitalize">{ title }</h4>
            <p>${price}</p>
            <p className="cursor-pointer text-blue-700">Remove</p>
        </div>
    </div>
  )
}

export default CartItem
