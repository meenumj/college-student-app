import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
    const [input,setInput] = new useState(
        {
          "UserName":"",
          "Password":""
        }
      )
      const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
      }
      const readValues = ()=>{
        console.log(input)
        if(input.UserName=="admin" && input.Password=="admin")
        {
          alert("Login Successful")
          setInput({
            "UserName":"",
            "Password":""
          })
        }
        else
        {
          alert("Invalid Usename or Password")
          setInput(
            {
                "UserName":"",
                "Password":""
              }
          )
        }
      }
  return (
    <div>
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>Admin Login</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">User Name</label>
                        <input type="text" className="form-control" name="UserName" value={input.UserName} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" value={input.Password} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-2 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-success" onClick={readValues}>Login</button></center>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center><Link to="/studentlogin" className="nav-link">Students Click Here</Link></center> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
