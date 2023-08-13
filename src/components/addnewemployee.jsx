import React from 'react'
import './addnewemployee.css'
import {Link} from 'react-router-dom'

export default function Addnewemployee() {
  return (
    <>
    <div className='employeeform'>
        <Link to='/employee' style={{color:'white', textDecoration:'none'}}>⬅Go back</Link>
        <h1 style={{color:'white'}}>Add New Employee</h1>
        <form action="http://localhost:4000/addemployee" method='post' encType='multipart/form-data'>
            <input type="text" name='employeeName' placeholder='Employee Name'/>
            <input type="file" name="picture" placeholder='Profile Picture' />
            <input type="text" name='cnic' placeholder='CNIC' />
            <input type="tel" name='employeeContact' placeholder='Contact'/>
            <input type="email" name='employeeEmail' placeholder='Email' />
            <input type="number" name="Salary" placeholder='Salary' />
            <button>Add Employee</button>
        </form>
    </div>
    </>
  )
}
