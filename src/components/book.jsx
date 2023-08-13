import React from "react";
import "./book.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Book() {
  var Data = JSON.parse(localStorage.getItem("Data"));
  console.log(Data);
  return (
    <>
      <div className="detail-container">
        <div className="room-detail">
          <img src={Data.image} alt="" />
          <h1 style={{color:'white'}}>{Data.title}</h1>
          <h3 style={{color:'white', paddingLeft:'150px', paddingRight:'150px', fontWeight:'100'}}>{Data.description}</h3>
          <h1 style={{color:'white'}}>{Data.price} per day</h1>
          <Link to='/register' style={{textDecoration:'none'}}><button className="book-now-btn">Book Now</button></Link>
        </div>
      </div>
    </>
  );
}
