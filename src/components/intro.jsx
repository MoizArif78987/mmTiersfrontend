import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './intro.css'

export default function Intro() {
  return (
    <>
    <div className='container'>
        <div className='image'>
            <img src="reception.jpg" alt="Loading" />
        </div>

        <div className='intro-text'>
            <h1>
                "Welcome to <br/><b>Misty Meadows</b>!
            </h1>
            <h3>
                Indulge in a world of luxury and serenity at our exquisite urban oasis. Nestled in the heart of a bustling metropolis, Misty Meadows Hotel offers a harmonious blend of modern sophistication and tranquil escape. Immerse yourself in the comfort of our elegantly appointed rooms, savor delectable cuisine crafted by our award-winning chefs, and unwind by our sparkling rooftop pool with breathtaking city views.
                <br/><br/>
                Whether you're here for business or leisure, our dedicated staff is committed to ensuring every moment of your stay is exceptional. Discover a haven where every detail is meticulously curated to create an unforgettable experience. Welcome to the epitome of relaxation and refinement - Welcome to Misty Meadows Hotel"
            </h3>
            <div style={{marginTop:'50px'}}>
            <Link to='/adminlogin' style={{color:'white',textDecoration:'none'}}><h5>Admin?</h5></Link>
            </div>
        </div>
        
    </div>
    </>
  )
}
