import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Test() {
  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            {/* Links to Sections */}
            <Nav.Item>
              <Nav.Link>
                <Link to="section1" smooth={true} duration={500} offset={-70} className="nav-link">
                  Section 1
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="section2" smooth={true} duration={500} offset={-70} className="nav-link">
                  Section 2
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="section3" smooth={true} duration={500} offset={-70} className="nav-link">
                  Section 3
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {/* Sections to scroll to */}
      <section id="section1" style={{ height: '100vh', background: '#f1f1f1', paddingTop: '70px' }}>
        <h1>Section 1</h1>
      </section>

      <section id="section2" style={{ height: '100vh', background: '#ddd', paddingTop: '70px' }}>
        <h1>Section 2</h1>
      </section>

      <section id="section3" style={{ height: '100vh', background: '#bbb', paddingTop: '70px' }}>
        <h1>Section 3</h1>
      </section>
    </div>
  );
}

export default Test;
