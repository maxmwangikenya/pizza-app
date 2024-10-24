import React from 'react'
import Logo from '../Assets/pizzaLogo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={Logo} />
        </div>
        <div className='rightside'></div>
    </div>
  )
}

export default Navbar
