import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", confirmPassword: ""});

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    let navigate = useNavigate();

    const host = "http://localhost:5000";

    const handleSubmit = async(e)=> {
        e.preventDefault();
        if (credentials.password === credentials.confirmPassword) {
            const response = await fetch(`${host}/api/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
            });
            const json = await response.json();
            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                props.showAlert("Successfully signed up", "success");
                navigate("/");
            } else {
                props.showAlert(json.error, "warning")
                setCredentials({password: ""});
            }
        } else {
            props.showAlert("Password not matching", "warning")
            setCredentials({confirmPassword: ""})
        }
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <Link className="link-primary" to="/login">
                                Login
                            </Link>
                        </div>
                        <div className="form-group mt-3 mb-2">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter name"
                                onChange={onChange}
                                minLength={3}
                                required
                            />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={onChange}
                                minLength={8}
                                required
                            />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="form-control mt-1"
                                placeholder="Confirm password"
                                onChange={onChange}
                                minLength={8}
                                required
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
    );
};

export default Signup;
