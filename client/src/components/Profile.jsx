import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    
    const host = "http://localhost:5000";

    let navigate = useNavigate();
    const [user, setUser] = useState({name: "", email: "", date: Date()});

    // get user details
    const getUser = async () => {
        // API call
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        setUser(json.data.user)
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUser();
        } else {
            navigate("/login");
        }
    }, []);
    

    return (
        <>
            <div className="contianer-fluid Auth-form-container">
                <div className="container box">
                    <div className="container box-content m-auto text-center">
                        <img className="mb-2" src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-6/profile-user.png" alt="" width={100} />
                        <h3>Hi {user.name} !</h3>
                        <p>Joined on {user.date}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
