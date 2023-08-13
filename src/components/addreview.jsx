import React from "react";
import "./addreview.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Addreview() {
  return (
    <>
      <div className="addreview">
        <div className="addcard">
          <div style={{display:'flex'}}>
          <Link to='/review' style={{textDecoration:'none'}}>
          <h4 style={{color:'white', marginLeft:'50px'}}>⬅ Go back</h4>
          </Link>
          <h1 style={{marginLeft:'30%'}}>Write Your Review</h1>
          </div>
          
          <form action="http://localhost:4000/review" method="post">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="15"
            placeholder="Let us know your views"
          ></textarea>
          {/* <Link to="/review"> */}
            <button>Post!</button>
          {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  );
}
