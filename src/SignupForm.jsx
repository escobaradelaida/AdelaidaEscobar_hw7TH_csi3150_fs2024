import React, { useState } from "react";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", formData);
        alert("Sign-up Successful!");
        setFormData({
          fullName: "",
          username: "",
          email: "",
          address: "",
          phone: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto"}}>
            <h2>User Sign-Up</h2>
            <label>
                Full Name:
                <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                    />
            </label>
            <br />
            <label>
                Username:
                <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required 
                    />
            </label>
            <br />
            <label>
                Email:
                <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    />
            </label>
            <br />
            <label>
                Address:
                <input 
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                    />
            </label>
            <br />
            <label>
                Phone Number:
                <input 
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;