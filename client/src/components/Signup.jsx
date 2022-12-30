import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="Auth-form-container">
              <form className="Auth-form">
                  <div className="Auth-form-content">
                      <h3 className="Auth-form-title">Sign Up</h3>
                      <div className="text-center">
                        Already registered?{" "}
                        <Link className="link-primary" to="/login">
                          Login
                        </Link>
                      </div>
                      <div className="form-group mt-3 mb-2">
                          <label>Name</label>
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Enter name"
                          />
                      </div>
                      <div className="form-group mt-2 mb-2">
                          <label>Email address</label>
                          <input
                              type="email"
                              className="form-control"
                              placeholder="Enter email"
                          />
                      </div>
                      <div className="form-group mb-2 mt-2">
                          <label>Password</label>
                          <input
                              type="password"
                              className="form-control mt-1"
                              placeholder="Enter password"
                          />
                      </div>
                      <div className="form-group mb-2 mt-2">
                          <label>Confirm Password</label>
                          <input
                              type="password"
                              className="form-control mt-1"
                              placeholder="Confirm password"
                          />
                      </div>
                      <div className="d-grid gap-2 mt-4 mb-2">
                          <button type="submit" className="btn btn-primary">
                              Sign Up
                          </button>
                      </div>
                  </div>
              </form>
          </div>
    </>
  )
}

export default Signup