import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Footer from '/src/Pages/Footer';
import './Signup.scss'
function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim() || !email.trim() || !password.trim()) {
            setError('Please fill out all fields');
            return;
        }

        // Name validation
        if (!validateName(name)) {
            setError('Please enter a valid name');
            return;
        }

        // Phone number validation
        if (!validatePhone(email)) {
            setError('Please enter a valid phone number');
            return;
        }

        // Password validation
        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long');
            return;
        }
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const validateName = (name) => {
        // Check if the name contains only letters and spaces
        const re = /^[a-zA-Z\s]+$/;
        return re.test(name);
    };

    // Function to validate phone number format
    const validatePhone = (email) => {
        const re = /^[0-9]{10}$/;
        return re.test(email);
    };

    // Function to validate password format
    const validatePassword = (password) => {
        return password.length >= 8;
    };

    return (
        <>
        <header>
        <nav>
          <div className="logo">FarmFriend Connect</div>
          <ul>
            
            <li><Link to="/register" className="nav-link">Signup</Link></li>
            
          </ul>
        </nav>
      </header>
        <div className="register">
            <div className="register_content">
                <form className="register_content_form" onSubmit={handleSubmit}>
                    <input
                        placeholder="Full Name"

                        autoComplete="off"
                        name="name"

                        onChange={(e) => setName(e.target.value)}

                        required
                    />

            <input
            placeholder="Phone Number"
            type="tel"
            autoComplete="off"
            name="email"
            
            onChange={(e) => setEmail(e.target.value)}
            required
          />
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"

                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">REGISTER</button>
                    {error && <p className="error">{error}</p>}
                </form>
                <Link to='/'>Already have an account? Log In Here</Link>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Signup;