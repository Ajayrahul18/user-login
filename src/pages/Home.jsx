import React from 'react'
import { Container, Button } from 'react-bootstrap'
import "../style/home.css"
const Home = () => {
  return (
    <Container>
        <h1>Welcome Guys!</h1>
        <p>Here you can do what ever you want</p>
        <Button variant="primary" type="submit">
        Get Started
      </Button>
    </Container>
  )
}

export default Home