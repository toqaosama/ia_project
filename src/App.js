import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import imgSrc from './assets/employicon.png'

import {Outlet} from 'react-router-dom'
function App() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <img
            src={imgSrc}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         <Navbar.Brand href="">Employment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">setteing</NavDropdown.Item>
              <NavDropdown.Item href="/Mycontact">
              My contact
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">log in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="login">
                log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    

{<Outlet/>}
</>
    );
}

    export default App;