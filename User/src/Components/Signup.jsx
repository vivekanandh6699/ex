import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3070/SignUP', formData); // Correct endpoint URL
          console.log(response.data);
          // Handle success, e.g., redirect to login page or show a success message
        } catch (error) {
          console.error('Error:', error.response.data);
          // Handle error, e.g., display error message to the user
        }
      };
    
    
      return (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>
            <p> if you already have an account please <Link to={"/login"}>login</Link></p>
          </form>
        </div>
      );
  
}

export default Signup
