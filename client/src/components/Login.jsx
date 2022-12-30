import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
          <div className="Auth-form-container">
              <form className="Auth-form">
                  <div className="Auth-form-content">
                      <h3 className="Auth-form-title">Login</h3>
                        <div className="text-center">
                          Not registered yet?{" "}
                          <Link className="link-primary" to="/signup">
                            Sign Up
                          </Link>
                        </div>
                      <div className="form-group mt-3 mb-2">
                          <label htmlFor="email">Email address</label>
                          <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Enter email"
                          />
                      </div>
                      <div className="form-group mt-2 mb-2">
                          <label htmlFor="password">Password</label>
                          <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control mt-1"
                              placeholder="Enter password"
                          />
                      </div>
                      <div className="d-grid gap-2 mt-4">
                          <button type="submit" className="btn btn-primary" >
                              Login
                          </button>
                      </div>
                      <p className="forgot-password text-right mt-2 text-center">
                          Forgot <a href="#">password?</a>
                      </p>
                  </div>
              </form>
          </div>
        </>
    );
};

export default Login;
