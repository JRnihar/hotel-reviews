import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return (
      <div>
        <p>Initializing User...</p>
      </div>
    );
  }

  const logOut=()=>{
    signOut(auth)
  }
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
              {user
                ?
                <button className='btn btn-link text-white' onClick={logOut}>sing out</button>
                :
                <Link className='me-5 text-white' to='/login'>LogIn</Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </nav>
  );
};

export default Header;