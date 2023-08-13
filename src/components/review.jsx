import React,{useEffect, useState} from 'react'
import Navbar from './navbar'
import './review.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Review() {
  
useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/getreviews");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);
  var [data, setData] = useState([]);

  return (
    <>
    <Navbar/>
    <div className='review'>
      {data.map((item,index)=>(
        <div className='reviewcard'>
          <h3>{item.name}</h3>
          <p>{item.review}</p>
        </div>
      ))}
        
        <Link to='/addreview' style={{textDecoration:'none'}}>
        <div className='reviewcard'>
            <p style={{fontSize:'80px', fontWeight:'200', color:'green'}}>
                +
            </p>
        </div>
        </Link>
    </div>
    </>
  )
}
