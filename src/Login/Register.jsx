import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {app , db , myCollectionRef , auth} from "./Firebase"
import {  addDoc } from "firebase/firestore";
import { useNavigate ,Link} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = { name: username, password: password };
    // const docRef = await addDoc(myCollectionRef, data);
    // console.log("Document written with ID: ", docRef.id);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,username, password);
      console.log('User created:', userCredential.user);
      // Redirect to the login page or show a success message
      navigate("/login");
    } catch (error) {
      console.error('Error creating user:', error);
      // Show an error message to the user
    }
  
      // Navigate to the protected route
    //   navigate("/login");
    // } catch (error) {
    //   console.error(error);
    // }
  

   

    setUsername("");
    setPassword("");
  };

  return (
   <div className="wrapper">
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formBasicUsername" >
        <h1 className="d-flex justify-content-center"  >Register</h1>
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

      {error && <p>{error}</p>}

      <Button variant="primary" type="submit" block  className="my-3  mx-auto d-block "  >
        Sign up
      </Button>
      <p className="d-flex justify-content-center"   ><Link to="/login">Log in</Link> </p>
    </Form>
    </div> 
  );
};

export default Register;