import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header(){
    return(
       <>
       <header className="fixed-top w-100" style={{"boxShadow":"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", zIndex:1}}>
            <Navbar expand="lg" className="bg-light">
                <Container className="p-2">
                    <Navbar.Brand href="#section1"><h3 className="playfair-font homepage-text">valloor.<span className="color-3">dev</span></h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link to="#section1" className="mx-4" href="#section1">HOME</Nav.Link>
                            <Nav.Link to="#section2" className="mx-4" href="#section2">ABOUT</Nav.Link>
                            <Nav.Link to="#section3" className="mx-4" href="#section3">EXPERTISE</Nav.Link>
                            <Nav.Link to="#section4" className="mx-4" href="#section4">CONTACT</Nav.Link>
                        </Nav>
                        <a href ='https://github.com/AdithyanValloor' target="_blank" className="link-dark mx-2 link-opacity-75-hover"><i className="bi bi-github"></i></a>
                        <a href ='https://www.instagram.com/adithyan.valloor/' target="_blank" className="link-dark mx-2 link-opacity-75-hover"><i className="bi bi-instagram"></i></a>
                        <a href ='https://www.linkedin.com/in/adithyan-valloor-6a90a82aa/' target="_blank" className="link-dark mx-2 link-opacity-75-hover"><i className="bi bi-linkedin"></i></a>
                        <a href ='https://x.com/vallooradithyan/' target="_blank" className="link-dark mx-2 link-opacity-75-hover"><i className="bi bi-twitter-x"></i></a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </header>
       </>
    )
}

export default Header