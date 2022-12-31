import { React, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email: "", password: ""});
    
    let navigate = useNavigate();

    const host = "http://localhost:5000";

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Successfully logged in", "success");
            navigate("/mynotes");
        } else {
            props.showAlert("Invalid Password", "danger");
            setCredentials({password: ""});
        }
    }
    
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
          <div className="Auth-form-container">
              <form className="Auth-form" onSubmit={handleSubmit}>
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
                              value={credentials.email}
                              onChange={onChange}
                              required
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
                              value={credentials.password}
                              onChange={onChange}
                              required
                          />
                      </div>
                      <div className="d-grid gap-2 mt-4">
                          <button type="submit" className="btn btn-primary">
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
