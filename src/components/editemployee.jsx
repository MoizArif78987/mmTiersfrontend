import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Editemployee() {
  const { id } = useParams();
  const [employeeName, setEmployeeName] = useState('');
  const [cnic, setCnic] = useState('');
  const [employeeContact, setEmployeeContact] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState(null); // For file input

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_id', id);
    formData.append('employeeName', employeeName);
    formData.append('cnic', cnic);
    formData.append('employeeContact', employeeContact);
    formData.append('employeeEmail', employeeEmail);
    formData.append('Salary', salary);
    formData.append('picture', picture); // Append the picture file

    try {
      const response = await fetch('http://localhost:4000/editEmployee', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Employee data updated successfully');
        // Handle success, redirect or show a success message
      } else {
        console.error('Failed to update employee data');
        // Handle error, show an error message
      }
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error, show an error message
    }
  };

  return (
    <>
      <div className='employeeform'>
        <Link to='/employee' style={{ color: 'white', textDecoration: 'none' }}>
          ⬅Go back
        </Link>
        <h1 style={{ color: 'white' }}>Edit Employee Information</h1>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <input
            type='text'
            name='employeeName'
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder='Employee Name'
          />
          <input
            type='file'
            name='picture'
            onChange={(e) => setPicture(e.target.files[0])}
            placeholder='Profile Picture'
          />
          <input
            type='text'
            name='cnic'
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder='CNIC'
          />
          <input
            type='tel'
            name='employeeContact'
            value={employeeContact}
            onChange={(e) => setEmployeeContact(e.target.value)}
            placeholder='Contact'
          />
          <input
            type='email'
            name='employeeEmail'
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type='number'
            name='Salary'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder='Salary'
          />
          <button type='submit'>Edit Employee Information</button>
        </form>
      </div>
    </>
  );
}
