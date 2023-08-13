import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './contact.css'

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className='contact'>
        <div className='card'>
          <div style={{display:'flex',background:'none'}}>
          <Link to='/' style={{marginLeft:'20px', textDecoration:'none' , color:'white'}}><h4>⬅Home</h4></Link>
            <h1 style={{marginLeft:'35%'}}>
                Contact Us
            </h1>
          </div>
            <form action="http://localhost:4000/contact" method="post">
            <input type="text" name='name' placeholder='Your Name' />
            <input type="email" name='email' placeholder='Your Email' />
            <textarea name="message" id="message" cols="30" rows="15" placeholder='Your Message'></textarea>
            <button>Send!</button>
            </form>
        </div>
    </div>
    </>
  )
}
