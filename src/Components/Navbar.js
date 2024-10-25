import React from 'react'
import Logo from '../Assets/pizzaLogo.png'
import {Link} from "react-router-dom";
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={Logo} />
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </div>
    </div>
  )
}

export default Navbar
