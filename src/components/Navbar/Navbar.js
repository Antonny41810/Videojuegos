import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Assets/Img/logo.png'
import { Link } from 'react-router-dom';
import './style.css';


export const NavbarApp = () => {
  return (
    <Navbar  bg="dark" variant="light">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="65"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/personajes" className='nav-link'>Personajes</Link>
            <Link to="/planetas" className='nav-link'>Planetas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 );
}
export default NavbarApp;