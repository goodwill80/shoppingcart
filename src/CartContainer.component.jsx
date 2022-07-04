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
    <section className="text-center pt-8">
        <header>
            <h2 className="text-3xl font-bold">Your Bag</h2>
        </header>
        <div className="w-1/2 mx-auto py-4">
            { cart.map((item, index)=> {
                return (
                <CartItem key={index} {...item}/>
            )})}
        </div>
    </section>
  )
}

export default CartContainer
