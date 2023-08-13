import React, { useEffect, useState } from "react";
import "./checkstatus.css";
import { Link } from "react-router-dom";



export default function Checkstatus() {
  const [customer , setCustomer] = useState({
    _id:"",
    type:"",
    totalPayable:0
  })

  const Customerdata = (item) =>{
    setCustomer({
      _id:item._id,
      type:item.type,
      totalPayable:item.totalPayable
    })
    if(customer._id.length > 1){
      handlePayment();
    }
  }
  const handlePayment = ()=>{
    console.log(customer._id)
    if(customer._id != null || customer._id != "")
    {
      const url = 'http://localhost:4000/checkStatusandpayment';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer), // Send both type and form data
      })
        .then(response => response.json())
        .then(responseData => {
          console.log('Data sent successfully:', responseData);
          // Perform any additional actions or show a success message
          window.location.href = responseData.url;
        })
        .catch(error => {
          console.error('Error sending data:', error);
          // Handle the error or show an error message
        });
  
    }
    

  }
  


  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/checkStatus");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  var [email, setEmail] = useState("");
  var [data, setData] = useState([]);
  var [match, setMatch] = useState([]);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const onCheckStatusClick = () => {
    setMatch([]);
    if (data.length > 0) {
      const matchedData = data.filter((item) => item.email === email);
      setMatch(matchedData);
    }
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <Link to="/rooms" style={{ color: "white", textDecoration: "none" }}>
          ⬅Go Back
        </Link>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter the email address you used for booking"
          name="email"
          value={email}
          onChange={handleChange}
          style={{
            height: "50px",
            width: "80%",
            color: "white",
            border: "1px solid white",
            borderRadius: "15px",
            marginTop: "50px",
            paddingLeft: "20px",
          }}
        />

        <button
          type="submit"
          onClick={onCheckStatusClick}
          style={{
            height: "50px",
            width: "500px",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "blue",
            marginTop: "20px",
            fontSize: "25px",
            fontWeight: "500",
            letterSpacing: "5px",
            border: "1px solid blue",
            cursor: "pointer",
          }}
        >
          Check Status
        </button>
      </div>

      <div>
        {match.map((item, index) => (
          <table
            style={{
              color: "white",
              marginTop: "50px",
              marginLeft: "35%",
              border: "1px solid white",
            }}
          >
            <tr key={index}>
              <td>Sr#</td>
              <td>{index + 1}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{item.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{item.email}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{item.contact}</td>
            </tr>
            <tr>
              <td>Room Type</td>
              <td>{item.type}</td>
            </tr>
            <tr>
              <td>Number of Adults</td>
              <td>{item.adults}</td>
            </tr>
            <tr>
              <td>Number of Children</td>
              <td>{item.children}</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>{item.startDate}</td>
            </tr>
            <tr>
              <td>End Date</td>
              <td>{item.endDate}</td>
            </tr>
            <tr>
              <td>Booking Status</td>
              <td>{item.status}</td>
            </tr>
            <tr>
              <td>Room Number</td>
              <td>{item.roomNumber}</td>
            </tr>

            <tr>
              <td>Payable: {item.totalPayable}</td>
              <td>
                {item.status === "Approved" && item.PaymentStatus != "Paid" && (
                  <button onClick={() => Customerdata(item)}>Proceed to payment</button>
                )}
              </td>
            </tr>
          </table>
        ))}
      </div>
    </>
  );
}
