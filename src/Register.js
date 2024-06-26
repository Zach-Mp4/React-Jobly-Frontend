import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import './Form.css'
function Register({user, setUser}){
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user.length !== 0) navigate("/");
      }, []);

    const handleSubmit = async evt => {
        evt.preventDefault();
        async function sendData(data){
            let res = await JoblyApi.register(data);
            return res;
        }

        let res = await sendData(formData);
        
        setUser({
            username: formData.username,
            token: res
        });

        navigate('/')
    };


    const [formData, setFormData] = useState({
        username: "",
        firstName:"",
        lastName:"",
        email:"",
        password: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    };

    return(
        <section className="formSection">
        <form onSubmit={handleSubmit}>

          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button>Register</button>
        </form>
        <h3><Link to={"/login"}>Already Have An Account?</Link></h3>
        </section>
    )
}

export default Register;