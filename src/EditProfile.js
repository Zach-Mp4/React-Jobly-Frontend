import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import './Form.css'

function EditProfile({user, setUser}){
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async evt => {
      try{
        evt.preventDefault();
        let token = user.token;
        let res = await JoblyApi.editUser(user.username, formData);
        setUser({
            ...res,
            token:token
        });

        navigate('/')
      } catch (err){
        setError(err);
      }
    };


    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
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
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>

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

          <label htmlFor="password">Enter Current Password or a new password:</label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />    

          <button>Submit</button>
        </form>
        </section>
    )
}

export default EditProfile;