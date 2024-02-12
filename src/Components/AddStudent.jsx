import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const AddStudent = () => {
    const [input,setInput] = new useState(
        
        {   
            "Name":"",
            "Rollno":"",
            "Admno":"",
            "College":"",
            "Parent":"",
            "Mobile":"",
            "Email":"",
            "Password":""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/student/addstudent",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Registration Successful")
            setInput(  {   
                "Name":"",
                "Rollno":"",
                "Admno":"",
                "College":"",
                "Parent":"",
                "Mobile":"",
                "Email":"",
                "Password":""
                   }
                
                   )
                  
        } else {
            alert("Something went wrong")
        }
    })
}
  return (
    <div>
        <AdminNavBar />
       <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>New Student Registration</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Roll No</label>
                        <input type="text" className="form-control" name="Rollno" value={input.Rollno} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Admission Number</label>
                        <input type="text" className="form-control" name="Admno" value={input.Admno} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name="College" value={input.College} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Parent</label>
                        <input type="text" className="form-control" name="Parent" value={input.Parent} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile</label>
                        <input type="text" className="form-control" name="Mobile" value={input.Mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" className="form-control" name="Email" value={input.Email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" value={input.Password} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-success" onClick={readValues}>Register</button></center>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
