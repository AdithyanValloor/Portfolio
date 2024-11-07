import React from 'react'
import { Container, Button, Col, Form, InputGroup, Row  } from 'react-bootstrap'
import { useState } from 'react';

function Contact() {

    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const phoneRegex = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;
  
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!phoneRegex.test(phone)) {
        setIsValid(false);
        setErrorMessage('Please enter a valid phone number');
      } else {
        setIsValid(true);
        setErrorMessage('');
        alert('Phone number is valid!');
      }

    setValidated(true);
  };


  return (
    <>
    <section id="section4">
        <Container className='py-5'>

            <h2 className='playfair-font text-center'>Contact me <hr/></h2>

            <Form noValidate validated={validated} onSubmit={handleSubmit} className='p-4'>
                <Row className="mb-4">
                    <Col className='mb-2'>
                        <Form.Group md="4" controlId="validationCustomUsername">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                            />
                            <Form.Control.Feedback type="invalid">
                                    Please enter your name
                                </Form.Control.Feedback>
                        </Form.Group>                
                    </Col>
                    <Col className='mb-2'>
                        <Form.Group md="4" controlId="validationPhoneNumber">
                            <InputGroup hasValidation>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    isInvalid={!isValid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errorMessage}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className='mb-2'>
                        <Form.Group md="4" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <Form.Control
                                type="email"
                                placeholder="Email"
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>                
                    </Col>
                    <Col className='mb-2'>
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Message"
                            />
                            <Form.Control.Feedback type="invalid">
                                    Please enter your message
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="outline-success" type="submit">Send message</Button>
            </Form>

        </Container>
    </section>
    </>
  )
}

export default Contact
