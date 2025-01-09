import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
   <>
   
   <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home">
      <Link to={'/home'} className="fw-bold fs-5 text-decoration-none">
        <i className="fa-solid fa-music"></i> Media Player
      </Link>
    </Navbar.Brand>
    
    
  </Container>
</Navbar>

   
   
   </>
  )
}

export default Header