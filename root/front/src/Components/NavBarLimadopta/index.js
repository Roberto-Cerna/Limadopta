import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
export default function NavBarLimadopta(){
    return(
        <Navbar bg="light" expand="lg"> 
        <Navbar.Brand href="#home">
                <img src="/Rufus.jpg" alt="failed :C " className="d-inline-block align-text-top img-thumbnail" width="100" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adopt">Adopta</Nav.Link>
            <Nav.Link href="/adopt/new">Nuevo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
         </Navbar>
    );
}

