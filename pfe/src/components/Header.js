import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../Redux/Actions/userActions';
import {MDBBtn} from 'mdb-react-ui-kit'

function Header() {
  const {user} = useSelector (state => state.loginDetales)
 const dispatch = useDispatch()
  const handleLogOut = () =>{
    dispatch(logout())
  }
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
            {user ?      
            <LinkContainer to={`/profile/${user.userId}`}>
              <Nav.Link href="#Profile">Profile</Nav.Link>
              </LinkContainer>
               : 
               <LinkContainer to='/Login'>
               <Nav.Link href="#LogIn">LogIn</Nav.Link>
               </LinkContainer>}
            
              
             {user ?
              <MDBBtn className='w-100 mb-4' size='md'onClick={handleLogOut}>Log Out</MDBBtn>
             :
              <LinkContainer to='/Signup'>
             <Nav.Link href="#LogIn">SignUp</Nav.Link>
             </LinkContainer>}
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