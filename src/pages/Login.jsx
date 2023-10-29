import React,{useState} from 'react';
import {Form, Button, Container} from "react-bootstrap";
import "../style/login.css";
import {Link, useNavigate} from "react-router-dom"

export const Login = () => {
const [formData, setformData] = useState({
  email: "",
  password: "",
})
const handleChange = (e) => {
  const {name, value} = e.target;
  setformData({...formData, [name]: value});
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
}

  return (
    <div>
    <h1>Login Page</h1>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name='password' value={formData.password} onChange={handleChange} required placeholder="Enter password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </Container>
    
    </div>
  )
}
export default Login