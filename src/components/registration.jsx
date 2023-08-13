import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './registration.css'


export default function Registration() {

  const [formData, setFormData] = useState({
    regname: '',
    regmail: '',
    regphone: '',
    regadults: 0,
    regchildren: 0,
    regarrivaldate: '',
    regarrivaltime: '',
    regdeparturedate: '',
    regdeparturetime: '',
  });

  const SendType = () => {
    var data = JSON.parse(localStorage.getItem('Data'));
    var type = data.title;
    console.log(type);

    const url = 'http://localhost:4000/register';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, ...formData }), // Send both type and form data
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Data sent successfully:', responseData);
        // Perform any additional actions or show a success message
      })
      .catch(error => {
        console.error('Error sending data:', error);
        // Handle the error or show an error message
      });

      window.alert("Registration Request Sent")
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <>
    <div className='reg-container'>
      {/* <form action="http://localhost:4000/register" method='post'> */}
      <form>
      <h1 style={{color:'white', fontSize:'35px'}}>Registration Form</h1>
      <input type="text" name='regname' placeholder='Name' value={formData.regname} onChange={handleInputChange} required/>
      <input type="email" name='regmail' placeholder='Email' value={formData.regmail} onChange={handleInputChange} required/>
      <input type="tel" name='regphone' placeholder='Mobile Number' pattern="\+?[0-9]{10,13}" value={formData.regphone} onChange={handleInputChange} required/>
      <input type="number" name='regadults' placeholder='Number of Adults' value={formData.regadults} onChange={handleInputChange} required/>
      <input type="number" name='regchildren' placeholder='Number of Children' value={formData.regchildren} onChange={handleInputChange} required/>
      
      <div>
        <h3 style={{color:'white', fontWeight:'400'}}>Arrival Date and Time</h3>
      </div>
      <div className='Arrival' style={{display:'flex'}}>
      <input type="date" name='regarrivaldate' placeholder='Arrival Date' value={formData.regarrivaldate} onChange={handleInputChange} required/> 
      <input type="time" name='regarrivaltime' placeholder='Arrival Time' value={formData.regarrivaltime} onChange={handleInputChange} required/>
      </div>

      <div>
        <h3 style={{color:'white', fontWeight:'400'}}>Departure Date and Time</h3>
      </div>
      <div className='departure' style={{display:'flex'}}>
      <input type="date" name='regdeparturedate' placeholder='Departure Date' value={formData.regdeparturedate} onChange={handleInputChange} required/> 
      <input type="time" name='regdeparturetime' placeholder='Departure Time' value={formData.regdeparturetime} onChange={handleInputChange} required/>
      </div>

      <Link to='/rooms' style={{textDecoration:'none'}}><button className="book-now-btn" onClick={SendType}>Book Now</button></Link>
      </form>
    </div>
    </>
  )
}