import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand href="#home">Share Me</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to='/'>
            <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Login'>
            <Nav.Link href="#LogIn">LogIn</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Signup'>
            <Nav.Link href="#SignUp">SignUp</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
        <Container>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
        </Container>
      </Navbar>
      </>
    );
  }
  
  export default Header