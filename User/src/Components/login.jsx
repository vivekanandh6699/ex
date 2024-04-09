import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
        
    });
    const navigate = useNavigate ()
    const [logedIn , setlogedIn] = useState(false)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3070/login', formData);
            console.log(response.data);
            // Handle success, maybe redirect to login page
        } 
        catch (error) {
            console.error(error.response.data);
            // Handle error, maybe show error message to the user
        }
    };
    const handlelogin =() =>{
        setlogedIn (true)
        navigate ('/home')
    }  
  return (
    <div>
            <h2>login  Form</h2>
            <form onSubmit={handleSubmit}>
              
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handlelogin}>Login </button>
            </form>
        </div>
  )
}

export default Login