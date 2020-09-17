import React from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = ()=>{
  return(
    <div>
       <Navbar expand="lg" fixed="top">
       <Container>
      <Navbar.Brand href="/"> <span>Books</span>Reviews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-nadjjjdj-nav">
        <Nav className="ml-auto">
          <Link  className="nav-link" to="/">HOME</Link>
          <Link  className="nav-link" to="/book">BOOKS</Link>
          <Link className="nav-link" to="/">REVIEWS</Link>
          <Link className="nav-link" to="/">NEWS</Link>
          <Link  className="nav-link" to="/">CONTACTS</Link>
          <Link  className="nav-link" to="/"><i className="fa fa-search"></i></Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Header;