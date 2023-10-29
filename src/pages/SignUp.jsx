import React,{useState} from 'react';
import {Form, Button, Container} from "react-bootstrap";
import "../style/signUp.css";
import {Link, useNavigate} from "react-router-dom"

export const SignUp = () => {
const [formData, setformData] = useState({
  fullName: "",
  email: "",
  password: "",
})
const handleChange = (e) => {
  const {name, value} = e.target;
  setformData({...formData, [name]: value})
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
}

  return (
    <div>
    
    <Container>
    <Form onSubmit={handleSubmit}>
    <h1>Registration Page</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name='fullName' value={formData.fullName} onChange={handleChange} required placeholder="Enter name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name='password' value={formData.password} onChange={handleChange} required placeholder="Enter password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p>Already have a account? <Link to="/login">Login</Link></p>
      
    </Form>
    </Container>
    
    </div>
  )
}
export default SignUp