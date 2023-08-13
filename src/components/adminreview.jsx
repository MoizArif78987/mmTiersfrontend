import React, { useEffect, useState } from "react";
import "./review.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AdminNav from "./AdminNav";

export default function Adminreview() {
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
      <AdminNav />
      <div className="review">
        {data.map((item, index) => (
          <div className="reviewcard">
            <h3>{item.name}</h3>
            <h5>{item.email}</h5>
            <p>{item.review}</p>
          </div>
        ))}

        <div className="reviewcard">
          <Link to='/messages' style={{textDecoration:'none'}} ><h1 style={{paddingTop:'20%', color:'green'}}>Check Messages</h1></Link>
        </div>
      </div>
    </>
  );
}
