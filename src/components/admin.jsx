import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AdminNav from './AdminNav'
import './admin.css'

const AdminPortal = () => {

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/checkStatus");
      const data = await response.json();
      setData(data);
      console.log(match)
      console.log(data)
    }
    getData();
   
  }, []);





  var [data, setData] = useState([]);
  var [match, setMatch] = useState([]);
  var [approved , setApproved]= useState([]);
  var [appStandard , setAppStandard] = useState([]);
  var [appGold , setAppGold] = useState([]);
  var [appPlatinum , setAppPlatinum] = useState([]);
  var [penStandard , setPenStandard] = useState([]);
  var [penGold , setPenGold] = useState([]);
  var [penPlatinum , setPenPlatinum] = useState([]);
  var [totStandard , setTotStandard] = useState([]);
  var [totGold , setTotGold] = useState([]);
  var [totPlatinum , setTotPlatinum] = useState([]);

  var [paid, setPaid] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const paidFound = data.filter((item) => item.PaymentStatus === "Paid");
      setPaid(paidFound);
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const matchedData = data.filter((item) => item.status === "pending");
      const approvedRooms = data.filter((item)=> item.status === "Approved")
      setMatch(matchedData);
      setApproved(approvedRooms);
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const standardData = data.filter((item) => item.type === "Standard Rooms");
      const goldData = data.filter((item) => item.type === "Gold Class Rooms");
      const platinumData = data.filter((item) => item.type === "Platinum Class Suites");

      setTotStandard(standardData);
      setTotGold(goldData);
      setTotPlatinum(platinumData);
    }
  }, [data]);


  useEffect(() => {
    if (approved.length > 0) {
      const standardData = approved.filter((item) => item.type === "Standard Rooms");
      const goldData = approved.filter((item) => item.type === "Gold Class Rooms");
      const platinumData = approved.filter((item) => item.type === "Platinum Class Suites");

      setAppStandard(standardData);
      setAppGold(goldData);
      setAppPlatinum(platinumData);
    }
  }, [approved]);

  useEffect(() => {
    if (match.length > 0) {
      const penstandardData = match.filter((item) => item.type === "Standard Rooms");
      const pengoldData = match.filter((item) => item.type === "Gold Class Rooms");
      const penplatinumData = match.filter((item) => item.type === "Platinum Class Suites");

      setPenStandard(penstandardData);
      setPenGold(pengoldData);
      setPenPlatinum(penplatinumData);
    }
  }, [match]);

const calculateRevenue =()=>{
  var total=0
  for(var i=0; i < paid.length; i++)
  {
    total += paid[i].totalPayable
  }
  return total
}

  return (
      <>
      <div>
        <AdminNav/>
        <div className='admin_row_1'>
          <div className='totalrooms'>
            <h3>
              Total Rooms
            </h3>
            <h3>
              Standard : 60
            </h3>
            <h3>
              Gold : 40
            </h3>
            <h3>
              Platinum : 8
            </h3>
          </div>
          <div className='totalrooms'>
            <h3>
              Occupied Rooms
            </h3>
            <h3>
              Standard : {appStandard.length}
            </h3>
            <h3>
              Gold : {appGold.length}
            </h3>
            <h3>
              Platinum : {appPlatinum.length}
            </h3>
          </div>
          <div className='totalrooms'>
            <h3>
              Free Rooms
            </h3>
            <h3>
              Standard : {60 - appStandard.length}
            </h3>
            <h3>
              Gold : {40 - appGold.length}
            </h3>
            <h3>
              Platinum : {8 - appPlatinum.length}
            </h3>
          </div>
        </div>

        <div className='revenue'>
          <h2>Generated Revenue : Rs. {calculateRevenue()}</h2>
        </div>


        <div className='admin_row_1'>
          <div className='totalrooms'>
            <h3>
              Total Bookings
            </h3>
            <h3>
              Standard : {totStandard.length}
            </h3>
            <h3>
              Gold : {totGold.length}
            </h3>
            <h3>
              Platinum : {totPlatinum.length}
            </h3>
          </div>
          <div className='totalrooms'>
            <h3>
              Approved Bookings
            </h3>
            <h3>
              Standard : {appStandard.length}
            </h3>
            <h3>
              Gold : {appGold.length}
            </h3>
            <h3>
              Platinum : {appPlatinum.length}
            </h3>
          </div>
          <div className='totalrooms'>
            <h3>
              Pending Bookings
            </h3>
            <h3>
              Standard : {penStandard.length}
            </h3>
            <h3>
              Gold : {penGold.length}
            </h3>
            <h3>
              Platinum : {penPlatinum.length}
            </h3>
          </div>
        </div>

        <Link to='/' style={{color:"white", textDecoration:'none'}}>⬅Home</Link>

      </div>
      </>
);
};

export default AdminPortal;
