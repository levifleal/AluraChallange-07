import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


//logos
import logo from '../assets/desktop/logo.png'


export default function MyNav(){

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="black" className='mb-0' >
          <Container>
            <Navbar.Brand href="#"><img src={logo}alt="Logo Meteora" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"  
              className='text-bg-dark'          
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
               <Offcanvas.Body>
                <Nav className="justify-content-start align-items-center flex-grow-1 pe-3 text-center">
                  <Nav.Link className='text-white' href="//">Home</Nav.Link>
                  <Nav.Link className='text-white'  href="//lojas">Nossas Lojas</Nav.Link>
                  <Nav.Link className='text-white'  href="//novidades">Novidades</Nav.Link>
                  <Nav.Link className='text-white'  href="//promos">Promoções</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <Container className='justify-content-center justify-content-sm-end'>
                <Form data-bs-theme="light" className="d-flex mt-1" >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-0"
                    aria-label="Search"
                  />
                  <Button variant="outline-light"
                  className='rounded-0'>Search</Button>
                </Form>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
