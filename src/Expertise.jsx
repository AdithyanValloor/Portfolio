import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import GdLogo from './assets/images/graphic-designer.png'
import UiUx from './assets/images/uiux.png'
import SwTesting from './assets/images/testing.png'
import WebDev from './assets/images/app-development.png'

function Expertise() {
  return (
    <section id="section3" className='bg-light px-3' style={{paddingTop:100, paddingBottom:50}}>
        <Container className='container-expertise'>
            <h2 className='playfair-font text-center'>Expertise <hr/></h2>
            <Row>
                <Col className='m-2'>
                    <div className='d-flex align-items-center'>
                        <Image src = {GdLogo} className='mb-4' style={{width:60}}/>
                        <h4 className='playfair-font mx-3 color'>Graphic Designing</h4>   
                    </div>
                    <p>
                        Skilled in branding, logo design, print materials, packaging, and custom illustrations, creating visually striking designs that communicate a brand’s message effectively. With expertise in Adobe Creative Suite and other industry tools, I bring creative concepts to life across both print and digital mediums.
                    </p>
                </Col>
                <Col className='m-2'>
                    <div className='d-flex align-items-center'>
                        <Image src = {UiUx} className='mb-4' style={{width:60}}/>
                        <h4 className='playfair-font mx-3 color'>UI|UX</h4>   
                    </div>  
                    <p>
                        Skilled in UI/UX design, creating intuitive and user-friendly interfaces that enhance the overall user experience. From user research to wireframing and high-fidelity design, I focus on crafting seamless, functional digital products that align with both user needs and brand goals.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='m-2'>
                    <div className='d-flex align-items-center'>
                        <Image src = {SwTesting} className='mb-4' style={{width:60}}/>
                        <h4 className='playfair-font mx-3 color'>Software Testing</h4>   
                    </div>
                    <p>
                        Skilled in software testing, focusing on ensuring the functionality, reliability, and performance of digital products. I conduct manual and automated tests to identify bugs, verify user requirements, and ensure a seamless user experience across platforms, helping to deliver high-quality, error-free applications.
                    </p>
                </Col>
                <Col className='m-2'>
                    <div className='d-flex align-items-center'>
                        <Image src = {WebDev} className='mb-4' style={{width:60}}/>
                        <h4 className='playfair-font mx-3 color'>Web Development</h4>   

                    </div>  
                    <p>
                        Skilled in web development, building responsive, user-friendly websites & web apps  that are both functional and visually appealing. Using technologies like HTML, CSS, JavaScript, and modern frameworks, I create optimized, dynamic web solutions that provide an engaging experience across devices and platforms.
                    </p>
                </Col>
            </Row>
            
            
        </Container>
    </section>
  )
}

export default Expertise
