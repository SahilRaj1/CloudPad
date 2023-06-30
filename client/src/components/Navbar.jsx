import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = (e)=> {
    e.preventDefault();
    localStorage.clear();
    props.showAlert("Successfully logged out", "success")
    navigate("/login");
  }

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">CloudPad</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {localStorage.getItem('token')?<li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/addnote'? 'active': ''}`} to={`${localStorage.getItem('token')? '/addnote': '/login'}`}>New note</Link>
                </li>: null}
            </ul>
            <form className="d-flex">
              {!localStorage.getItem('token')? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==='/login'? 'active': ''}`} to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==='/signup'? 'active': ''}`} to="/signup">Signup</Link>
                  </li>
              </ul>: null}
              {localStorage.getItem('token')? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <Link className={`nav-link`} to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link className={`nav-link`} onClick={handleLogout}>Logout</Link>
                  </li>
                  </ul>: null}
            </form>
            </div>
        </div>
        </nav>
    </>
  )
}
