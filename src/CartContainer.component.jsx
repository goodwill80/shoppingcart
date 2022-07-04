import React, { useContext } from 'react'
import { AppContext } from './Context'
import CartItem from './CartItem.component';

function CartContainer() {
    const { cart } = useContext(AppContext);
    if(cart.length === 0) {
        return (
            <section>
                <header>
                    <h2>Your Bag</h2>
                    <h4>is currently empty</h4>
                </header>
            </section>
        )
    }

  return (
    <section className="pt-8 text-center px-2">
        {/* Title */}
        <header>
            <h2 className="text-4xl font-bold tracking-widest text-center my-2">Your Cart</h2>
        </header>
        {/* Cart Items */}
        <div className="w-11/12 mx-auto py-4 md:w-1/2 border-y-4">
            { cart.map((item, index)=> {
                return (
                <CartItem key={index} {...item}/>
            )})}
        </div>
        {/* Clear All Btn and Total Summary */}
        <footer className="flex items-center justify-between md:w-1/2 px-12 pt-4 mx-auto">
        <div className='cart-total'>
          <h4 className="capitalize font-bold">
            total <span>$0.00</span>
          </h4>
        </div>
        <button className='text-blue-500 capitalize ml-4 hover:underline hover:text-red-400'>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
