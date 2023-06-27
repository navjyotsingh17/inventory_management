import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [setError] = useState('');

    
    const navigate = useNavigate();

    document.title="InventoryManagement | Sign In";

    const handleLogin = (e) => {
        e.preventDefault();
        
        const data = { username, password };
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: username + ' signed in successfully !!!!',
                        timer: 1500,
                        showConfirmButton: false
                    });
                    
                    navigate("/home");
                    console.log("success")
                } else {
                    // registration failed
                    Swal.fire({
                        icon: 'error',
                        title:' Sign in failed !!!!',
                    });

                }
            })
            .catch(error => {
                setError('Sign in failed. Please try again.');
            });
          
        // add code to submit login credentials to API endpoint
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-sm-12">
                    <h2 className="text-center mb-4">Sign In</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        Don't have an account? <Link to="/sign_up">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
