import React from 'react'
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import {app , db , myCollectionRef , auth} from "./Firebase"
import {  addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const[error,setError] = useState("")
const navigate = useNavigate();



const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // Authenticate the user with Firebase
        const userCredential = await signInWithEmailAndPassword(
          auth,
          username,
          password
        );
        const user = userCredential.user;
        console.log("Logged in user:", user);
    
        // Navigate to the protected route
        navigate("/food");
      } catch (error) {
        console.error(error);
        setError("Invalid password")
      }
    
  };

  return (
  
    <div className="wrapper">
        
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formBasicUsername" >
        <h1 className="d-flex justify-content-center"  >Login</h1>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isInvalid={username.length < 3}
        />
        {/* <Form.Control.Feedback type="invalid">
          Username must be at least 3 characters long.
        </Form.Control.Feedback> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={password.length < 6}
        />
        {/* <Form.Control.Feedback type="invalid">
          Password must be at least 6 characters long.
        </Form.Control.Feedback> */}
      </Form.Group>

     

      <Button variant="primary" type="submit">
       Sign in
      </Button>
      <p className="d-flex justify-content-center"   ><Link to="/">Register</Link> </p>
      {error && <div className="d-flex justify-content-center ">{error}</div>}
    </Form>
    </div> 
  )
}

export default Login



