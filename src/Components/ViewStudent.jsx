import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const ViewStudent = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/student/viewstudents").then(
            (response)=>{setData(response.data)})
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
      <AdminNavBar />

      <div className="container bg-light">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><h1><center>View Student Details</center></h1><br />
                    </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll No</th>
      <th scope="col">Admission Number</th>
      <th scope="col">College</th>
      <th scope="col">Parent</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>

    </tr>
  </thead>
  <tbody>
{
    data.map((value,index)=>{
        return <tr>
        <td>{value.Name}</td>
        <td>{value.Rollno}</td>
        <td>{value.Admno}</td>
        <td>{value.College}</td>
        <td>{value.Parent}</td>
        <td>{value.Mobile}</td>
        <td>{value.Email}</td>
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

export default ViewStudent
