import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const ViewMarks = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/mark/viewmark").then(
            (response)=>{setData(response.data)})
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
      
<AdminNavBar/>
      <div className="container bg-light">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><h1><center>View Mark Details</center></h1><br />
                    </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table">
  <thead>
    <tr>
      <th scope="col">Roll No</th>
      <th scope="col">Name</th>
      <th scope="col">Admission Number</th>
      <th scope="col">Mathematics</th>
      <th scope="col">Computer Science</th>
      <th scope="col">History</th>
      <th scope="col">Physics</th>
      <th scope="col">English</th>

    </tr>
  </thead>
  <tbody>
{
    data.map((value,index)=>{
        return <tr>
        <td>{value.UserID.Rollno}</td>
        <td>{value.UserID.Name}</td>
        <td>{value.UserID.Admno}</td>
        <td>{value.Mark1}</td>
        <td>{value.Mark2}</td>
        <td>{value.Mark3}</td>
        <td>{value.Mark4}</td>
        <td>{value.Mark5}</td>
        </tr>
    })
}
  </tbody>
</table>

            </div>
        </div>
     </div>
    </div>
  )
}

export default ViewMarks
