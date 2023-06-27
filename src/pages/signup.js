import React, { useState } from 'react';
import { message } from "antd";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    document.title="InventoryManagement | Sign Up";

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { username, email, phone_number ,password };
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    // registration successful
                    // redirect user to login page or show success message
                    setTimeout(() => {
                        message.success(username+' registered successfully');
                    }, 10);
                    navigate("/");
                    console.log("success")
                } else {
                    // registration failed
                    setError('Registration failed. Please try again.');
                }
            })
            .catch(error => {
                setError('Registration failed. Please try again.');
            });
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <h2 className='text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Phone Number</label>
                            <input type="ph_number" className="form-control" id="ph_number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
