import React,{useEffect, useState} from 'react'
import './messages.css'
import {Link} from 'react-router-dom'

export default function Messages() {
    useEffect(() => {
        async function getData() {
          const response = await fetch("http://localhost:4000/getmessage");
          const data = await response.json();
          setData(data);
        }
        getData();
      }, []);
      var [data, setData] = useState([]);
      var [reply , setReply] = useState({
        reply:''
      })

      const sendReply = (email) => {
        const url = 'http://localhost:4000/reply';
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, ...reply }), // Send both type and form data
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
      };

      const handleInputChange = event => {
        const { name, value } = event.target;
        setReply(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };
 
    return (
    <>
    <div className='messages-container'>
        <Link to='/adminreview' style={{color:'white', textDecoration:'none'}}><h4>⬅ Go Back</h4></Link>
        <h1>Customer Queries</h1>
        {data.map((item, index) => (
          <div className='messagebox'>
            <h1>{item.name}</h1>
            <h3 style={{color:'grey'}}>{item.email}</h3>
            <p>{item.message}</p>

            <form>
                <input type="text" name='reply' placeholder='Write your reply here' value={reply.email} onChange={handleInputChange}/>
                <button style={{paddingLeft:'30px', paddingRight:'30px', marginBottom:'20px', fontWeight:'700', letterSpacing:'3px' , border:'1px solid blue' , }} onClick={()=>sendReply(item.email)}>Reply</button>
            </form>
            
          </div>
        ))}
        
    </div>
    </>
  )
}
