import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const navigate = useNavigate(); // Access the navigate function
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3070/SignUP', formData); // Correct endpoint URL
          console.log(response.data);
          // Handle success, e.g., redirect to login page or show a success message
          navigate('/login');
        } catch (error) {
          console.error('Error:', error.response.data);
          // Handle error, e.g., display error message to the user
        }
      };
    
    
      return (
        <div className="signup-container">
          <h2 className="signup-heading">Sign Up</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="signup-input" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="signup-input" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="signup-input" />
            <button type="submit" className="signup-button">Register</button>
            <p className="signup-paragraph">If you already have an account please <Link to="/login" className="signup-link">login</Link></p>
          </form>
        </div>
      );
  
};

export default Signup
