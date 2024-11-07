import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Homepage(){
    return(
        <>
        <section id="section1" className="bg-light">
            <Container className="p-5 container-home d-flex align-items-center justify-content-center" >
                <div className="w-75 my-5">
                    <h3 className="homepage-text playfair-font">Welcome, I am</h3>
                    <h1 className="homepage-text display-2 playfair-font">Adithyan Valloor</h1>
                    <hr/>
                    <h5 className="homepage-text playfair-font">Passionate & Creative Designer | Innovative Web Developer</h5>
                    {/* <p>I am a creative Full Stack Developer and Designer with a passion for building intuitive, user-centered digital experiences. With a strong focus on blending functionality with aesthetics, I strive to create seamless and visually engaging websites and applications that meet both user needs and business goals.</p> */}
                </div>
            </Container>
        </section>
        </>
    )
}

export default Homepage