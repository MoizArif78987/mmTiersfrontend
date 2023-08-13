import React, {useEffect, useState} from 'react'
import AdminNav from './AdminNav'

export default function Bookingrequest() {

const [standard, setStandard]=useState([101,102,103,104,105,106,107,108,109,110,111,112,201,202,203,204,205,206,207,208,209,210,211,212,301,302,303,304,305,306,307,308,309,310,311,312,401,402,403,404,405,406,407,408,409,410,411,412,
501,502,503,504,505,506,507,508,509,510,511,512])

const [gold , setGold] =useState([601,602,603,604,605,606,607,608,701,702,703,704,705,706,707,708,801,802,803,804,805,806,807,808,901,902,903,904,905,906,907,908,1001,1002,1003,1004,1005,1006,1007,1008])

const [platinum, setPlatinum]=useState([1101,1102,1103,1104,1201,1202,1203,1204])

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

      useEffect(() => {
        if (data.length > 0) {
          const matchedData = data.filter((item) => item.status === "pending");
          const approvedRooms = data.filter((item)=> item.status === "Approved")
          setMatch(matchedData);
          setApproved(approvedRooms);
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


      var [idandstatus, setIdandstatus] = useState({
        _id:"",
        status:"",
        roomNumber:0,
        email:"",
        totalPayable:0
      });
      const url = 'http://localhost:4000/bookingrequest';
      const onApprove=(id,type,email,startDate,endDate)=>{
        const sdate = new Date(startDate)
        const edate = new Date(endDate)
        const daysinms = edate-sdate;
        const days = Math.floor(daysinms / (1000 * 60 * 60 * 24))
        if(days==0)
        {
          days =1;
        }
        var payable=0;
        var number=0;
        if(type=="Standard Rooms"){
          number = standard[appStandard.length]
          payable=days * 12000
        }
        else if(type=="Gold Class Rooms"){
          number = gold[appGold.length]
          payable = days * 20000
        }
        else{
          number = platinum[appPlatinum.length]
          payable = days * 45000
        }
        console.log(number)

        setIdandstatus({
          _id:id,
          status:"Approved",
          roomNumber:number,
          email:email,
          totalPayable:payable
        })
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(idandstatus), // Send both type and form data
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
      const onDecline=(id, email)=>{
        setIdandstatus({
          _id:id,
          status:"Declined",
          roomNumber:0,
          email:email
        })
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(idandstatus), // Send both type and form data
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


  return (
    <>
    <AdminNav/>
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
            <tr>
              <td>Booking Status</td>
              <td>{item.status}</td>
            </tr>
            <tr>
                <td>
                    <button onClick={() => onDecline(item._id, item.email)} style={{backgroundColor:'red', cursor:'pointer'}}>Decline</button>
                </td>
                <td>
                    <button onClick={() => onApprove(item._id,item.type, item.email, item.startDate, item.endDate)} style={{backgroundColor:'green', cursor:'pointer'}}>Approve</button>
                </td>
            </tr>
          </table>
        ))}
      </div>

    </>
  )
}
