import React from 'react'
import Navbar from './navbar'
import './rooms.css'
import {Link} from 'react-router-dom';

export default function Rooms() {
  return (
    <>
    <Navbar/>
    
    <div className='cards'>
    
        <Link to='/book' style={{textDecoration:'none'}}>
        <div className='standard' onClick={()=>{
            localStorage.setItem('Data',JSON.stringify({
                'title':'Standard Rooms',
                'image':'standard-room.jpg',
                'description':`Experience comfort and convenience on floors 1 to 5 with our Standard Rooms. Enjoy a restful night's sleep on a lavish double bed, bask in the cool embrace of air conditioning, and unwind with entertainment on the TV. Your perfect retreat awaits.`,
                'price':'Rs. 12,000'
            }))
        }}>
            <h1 style={{color: '#cd7f32', fontSize:'40px'}}>
                Standard
            </h1>

            <img src="standard-room.jpg" alt="Loading" />

            <p style={{color: 'white', padding:'20px', lineHeight:'150%'}}>
            Experience comfort and convenience on floors 1 to 5 with our Standard Rooms. Enjoy a restful night's sleep on a lavish double bed, bask in the cool embrace of air conditioning, and unwind with entertainment on the TV. Your perfect retreat awaits.
            </p>

            <h1 style={{color:'white'}}>Rs. 12,000</h1>
        </div>
        </Link>

        <Link to='/book' style={{textDecoration:'none'}}>
        <div className='Gold' onClick={()=>{
            localStorage.setItem('Data',JSON.stringify({
                'title':'Gold Class Rooms',
                'image':'gold-room.jpg',
                'description':`Elevate your stay to new heights on floors 6 to 10 with our Gold Rooms. Luxuriate in a spacious double bed, indulge in enhanced amenities including top-tier air conditioning, and immerse yourself in entertainment on the premium TV. An opulent escape awaits you.`,
                'price':'Rs. 20,000'
            }))
        }}>
            <h1 style={{color: '#FFD700', fontSize:'40px'}}>
                Gold
            </h1>

            <img src="gold-room.jpg" alt="Loading" />

            <p style={{color: 'white', padding:'20px', lineHeight:'150%'}}>
            Elevate your stay to new heights on floors 6 to 10 with our Gold Rooms. Luxuriate in a spacious double bed, indulge in enhanced amenities including top-tier air conditioning, and immerse yourself in entertainment on the premium TV. An opulent escape awaits you.
            </p>

            <h1 style={{color:'white'}}>Rs. 20,000</h1>
        </div>
        </Link>

        <Link to='/book' style={{textDecoration:'none'}}>
        <div className='Platinum' onClick={()=>{
            localStorage.setItem('Data',JSON.stringify({
                'title':'Platinum Class Suites',
                'image':'platinum-room.jpg',
                'description':` Ascend to the pinnacle of luxury on floors 11 and 12 with our Platinum Suites. Experience the epitome of indulgence in spacious suites featuring double beds, exquisite decor,private dining and living area, state-of-the-art air conditioning, and entertainment on a deluxe TV. Your extraordinary sanctuary beckons.`,
                'price':'Rs. 45,000'
            }))
        }}>
            <h1 style={{color: '#E5E4E2', fontSize:'40px'}}>
                Platinum
            </h1>

            <img src="platinum-room.jpg" alt="Loading" />

            <p style={{color: 'white', padding:'20px', lineHeight:'150%'}}>
            Ascend to the pinnacle of luxury on floors 11 and 12 with our Platinum Suites. Experience the epitome of indulgence in spacious suites featuring double beds, exquisite decor,private dining and living area, state-of-the-art air conditioning, and entertainment on a deluxe TV. Your extraordinary sanctuary beckons.
            </p>

            <h1 style={{color:'white', marginTop:'-13px',background:'none'}}>Rs. 45,000</h1>
        </div>
        </Link>

    </div>
    <div>
        <Link to='/checkStatus' style={{color:'white', textDecoration:'none'}}><h3>Check Booking Status ➡</h3></Link>
    </div>
    </>
  )
}
