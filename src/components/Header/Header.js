import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav>
           {/* <Link to='/'>Home</Link>
           <Link to='/roomes'>Roomes</Link>
           <Link to='/login'>LogIn</Link> */}

<Navbar className='mb-5' fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      {/* <Nav.Link to="/">Features</Nav.Link>
      <Nav.Link to="login">Pricing</Nav.Link> */}
       <Link className='me-5 text-white' to='/'>Home</Link>
           <Link className='me-5 text-white' to='/roomes'>Roomes</Link>
           <Link className='me-5 text-white' to='/login'>LogIn</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

       </nav>
    );
};

export default Header;