import React, { useState } from 'react'
import './adminlogin.css'

export default function Adminlogin() {
    const [credentials, setCredentials]=useState({
        username:'',
        password:''
    })
    const handleInputChange = event => {
        const { name, value } = event.target;
        setCredentials(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };
    const CheckCredentials =()=>{
        if(credentials.username != "admin@mm" || credentials.password != "!pa$$word"){
            window.alert("Error Loging In")
            window.location.href = "http://localhost:3000/"
        }
        if(credentials.username==="admin@mm" && credentials.password === "!pa$$word")
        {
            window.location.href = "http://localhost:3000/admin"
        }
    }
  return (
    <>
    <div className='loginform'>
    <h1>Admin Login</h1>
        <input type="text" name='username' value={credentials.username} onChange={handleInputChange} placeholder='Username' required/>
        <input type="password" name='password' value={credentials.password} onChange={handleInputChange} placeholder='Password' required/>
        <button onClick={CheckCredentials}>Login</button>
    </div>
    </>
  )
}
