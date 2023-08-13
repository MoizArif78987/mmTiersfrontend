import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
           <li><Link to='/' style={{textDecoration:"none", color:"white"}}>Home</Link></li>
            <li><Link to='/rooms' style={{textDecoration:"none", color:"white"}}>View Rooms</Link></li>
            <li><Link to='/review' style={{textDecoration:"none", color:"white"}}>Reviews</Link></li>
            <li><Link to='/contact' style={{textDecoration:"none", color:"white"}}>Contact Us</Link></li>
        </ul>
    </nav>
  )
}
