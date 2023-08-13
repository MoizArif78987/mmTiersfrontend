import React,{useEffect,useState} from 'react'
import './employee.css'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'

export default function Employee() {
  const [sentid, setSentid]= useState('')

  const sendID = (id)=>{
    setSentid(id);
    console.log(sentid)
  }
  useEffect(() => {
    if (sentid) {
      DeleteEmployee();
    }
  }, [sentid]);
  const DeleteEmployee =()=>{
    
    fetch('http://localhost:4000/deleteEmployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: sentid }), // Send both type and form data
    }).then(response => response.json())
    .then(responseData => {
      console.log('Data sent successfully:', responseData);
      // Perform any additional actions or show a success message
    })
    .catch(error => {
      console.error('Error sending data:', error);
      // Handle the error or show an error message
    });
  }



  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/getemployees");
      const data = await response.json();
      setData(data);
    }
    console.log(data)
    getData();
  }, []);
  var [data, setData] = useState([]);

  return (
    <>
    <AdminNav/>
    <div>
    <table style={{border:'1px solid white', color:'white', width:'80%', marginLeft:'10%'}}>
  <thead>
    <tr style={{ display:'grid', gridTemplateColumns:'repeat(8,1fr)'}}>
      <th>Sr#</th>
      <th>Image</th>
      <th>Name</th>
      <th>CNIC</th>
      <th>Contact</th>
      <th>Email</th>
      <th>Salary</th>
      <th>Edit / Delete</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index)=>(
      <tr key={item._id} style={{ display:'grid', gridTemplateColumns:'repeat(8,1fr)'}}>
        <td>{index + 1}</td>
        <td><img style={{height:"100px", width:'100px'}} src={`http://localhost:4000/images/${item.image}`} alt="loading" /></td>
        <td>{item.name}</td>
        <td>{item.cnic}</td>
        <td>{item.contact}</td>
        <td>{item.email}</td>
        <td>{item.salary}</td>
        <td><Link to={`/editemployee/${item._id}`}><button>Edit</button></Link> <button onClick={()=>sendID(item._id)} style={{backgroundColor:"red"}}>Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
    
    <Link to='/AddNewEmployee' style={{textDecoration:'none', color:'white'}}><button style={{marginTop:'30px'}}>Add Employee</button></Link>
    </>
  )
}
