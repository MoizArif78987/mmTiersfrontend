import React,{useState} from 'react'
import './adminroom.css'
import {Link} from 'react-router-dom'
import AdminNav from './AdminNav'

export default function Adminrooms() {

    const [standard, setStandard]=useState([101,102,103,104,105,106,107,108,109,110,111,112,
        201,202,203,204,205,206,207,208,209,210,211,212,
        301,302,303,304,305,306,307,308,309,310,311,312,
        401,402,403,404,405,406,407,408,409,410,411,412,
        501,502,503,504,505,506,507,508,509,510,511,512])

    const [gold , setGold] =useState([601,602,603,604,605,606,607,608,
        701,702,703,704,705,706,707,708,
        801,802,803,804,805,806,807,808,
        901,902,903,904,905,906,907,908,
        1001,1002,1003,1004,1005,1006,1007,1008])

    const [platinum, setPlatinum]=useState([1101,1102,1103,1104,1201,1202,1203,1204])

  return (
    <>
    <AdminNav/>
    <div className='Rooms'>
        <h3>
            Standard Rooms
        </h3>
        {standard.map((item,index)=>(
            <Link style={{textDecoration:'none'}} to={`/roomhistory/${standard[index]}`}><p>{standard[index]}</p></Link>
        ))}
    </div>
    <div className='Rooms'>
        <h3>
            Gold Rooms
        </h3>
        {gold.map((item,index)=>(
            <Link style={{textDecoration:'none'}} to={`/roomhistory/${gold[index]}`}><p>{gold[index]}</p></Link>
        ))}
    </div>
    <div className='Rooms'>
        <h3>
            Platinum Rooms
        </h3>
        {platinum.map((item,index)=>(
            <Link style={{textDecoration:'none'}} to={`/roomhistory/${platinum[index]}`}><p>{platinum[index]}</p></Link>
        ))}
    </div>
    </>
  )
}
