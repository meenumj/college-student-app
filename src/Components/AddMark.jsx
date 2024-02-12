import axios from 'axios'
import React, { useState } from 'react'
import StudentNavBar from './StudentNavBar'

const AddMark = () => {
    const [input,setInput] = new useState(
        
        {   
            "UserID":sessionStorage.getItem("userID"),
            "Mark1":"",
            "Mark2":"",
            "Mark3":"",
            "Mark4":"",
            "Mark5":""

               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/mark/addmark",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Marks Added Successfully")
            setInput(  {   

                "Mark1":"",
                "Mark2":"",
                "Mark3":"",
                "Mark4":"",
                "Mark5":""
                   }
                
                   )
                  
        } else {
            alert("Something went wrong")
        }
    })
}
  return (
    <div>
        <StudentNavBar />

        <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>Add Your Marks</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subject 1: Mathematics</label>
                        <input type="text" className="form-control" name="Mark1" value={input.Mark1} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subject 2: Computer Science</label>
                        <input type="text" className="form-control" name="Mark2" value={input.Mark2} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subject 3: History</label>
                        <input type="text" className="form-control" name="Mark3" value={input.Mark3} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subject 4:Physics</label>
                        <input type="text" className="form-control" name="Mark4" value={input.Mark4} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subject 5:English</label>
                        <input type="text" className="form-control" name="Mark5" value={input.Mark5} onChange={inputHandler} />
                    </div>
    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-success" onClick={readValues}>Add Marks</button></center>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddMark
