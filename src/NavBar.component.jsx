import React from 'react'

function NavBar() {
  return (
    <nav>
      <div className="nav-center flex w-screen bg-blue-900 items-center justify-between px-8 h-24">
        <h3 className="text-3xl font-bold text-white pl-4">UseReducers</h3>
        {/* NavBar Container */}
        <div className="relative flex w-68 pr-8 cursor-pointer">
            {/* Cart Logo */}
            <svg className="h-16" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
            </svg>
            {/* Amount */}
            <div className='amount-container text-white absolute top-11 left-4'>
                <p className='total-amount text-xs'>$0.00</p>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
