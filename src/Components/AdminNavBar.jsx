import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ADMIN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addstudent">Add New Student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewstudent">View Student Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewmark">View Student with Marks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AdminNavBar
