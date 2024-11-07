import React from 'react'
import { Container } from 'react-bootstrap'

function AboutPage() {
  return (
    <>
    <section id="section2" style={{paddingTop:100, paddingBottom:50}}>
        <Container className='container-about px-5' >
            <h2 className='playfair-font text-center'>About me <hr/></h2>
            <div>
                <h1 className='playfair-font my-4 color-3'>I am Adithyan Valloor, <br /> Web Developer & Designer <br /> from Kerala, India</h1>
                <p>I am a passionate designer and web developer with a love for creating seamless, intuitive, and visually compelling digital experiences. 
                    I believe that design is not just about how things look, but about how they work and how they make people feel.
                    With a strong foundation in both design principles and web development, I bridge the gap between aesthetics and functionality.
                    Whether I’m crafting pixel-perfect UI/UX designs, writing clean code, or optimizing websites for performance,
                    my goal is always to build something that not only looks great but also delivers results.
                </p>
                <a href="#" className='link-success text-decoration-none link-opacity-50-hover'>DOWNLOAD RESUME</a>
            </div>
        </Container>
    </section>
      
    </>
  )
}

export default AboutPage
