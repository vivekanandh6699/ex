// App.jsx

import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Hash password before sending it to the server
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    try {
      // Make HTTP request using Axios
      const response = await axios.post('/signup', {
        email: formData.email,
        password: hashedPassword, // Send hashed password
        name: formData.name
      });
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error.response.data);
      // Handle error
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>CRUD MERN App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
