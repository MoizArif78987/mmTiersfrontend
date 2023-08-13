import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function AdminNav() {
  return (
    <nav>
        <ul>
           <li><Link to='/admin' style={{textDecoration:"none", color:"white"}}>Dashboard</Link></li>
            <li><Link to='/employee' style={{textDecoration:"none", color:"white"}}>Employees</Link></li>
            <li><Link to='/adminrooms' style={{textDecoration:"none", color:"white"}}>Rooms</Link></li>
            <li><Link to='/bookingRequest' style={{textDecoration:"none", color:"white"}}>Bookings</Link></li>
            <li><Link to='/adminreview' style={{textDecoration:"none", color:"white"}}>Reviews & Messages</Link></li>
        </ul>
    </nav>
  )
}
