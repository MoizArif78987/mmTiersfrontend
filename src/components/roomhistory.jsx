import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Roomhistory() {
    const { roomNumber } = useParams();
    const roomNumberAsNumber = parseInt(roomNumber, 10);

    useEffect(() => {
        async function getData() {
          const response = await fetch("http://localhost:4000/checkStatus");
          const data = await response.json();
          setData(data);
          console.log(data)
        }
        getData();
       
      }, []);
      var [data, setData] = useState([]);
      var [approved , setApproved]= useState([]);
      var [match, setMatch] = useState([]);

      useEffect(() => {
        if (data.length > 0) {
          const approvedRooms = data.filter((item)=> item.status === "Approved")
          setApproved(approvedRooms);
        }
      }, [data]);
      useEffect(() => {
        if (approved.length > 0) {
          const matchedData = approved.filter((item)=> item.roomNumber === roomNumberAsNumber)
          setMatch(matchedData);
          console.log(match)
        }
      }, [approved]);



  return (
    <>
    <div style={{marginTop:'20px'}}>
        <Link style={{color:'white', textDecoration:'none'}} to='/adminrooms'>⬅Go back</Link>
    </div>

    <div>
    {match.map((item, index) => (
          <table style={{color:'white', marginTop:'50px',marginLeft:'35%', border:'1px solid white'}}>
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
              <td>Type</td>
              <td>{item.type}</td>
            </tr>
            
          </table>
        ))}
    </div>
    </>
  )
}
