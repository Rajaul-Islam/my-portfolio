import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div id='contact' className='py-5'>
            <Container className='text-start'>
                <h1 data-aos="fade-right" style={{ color: '#df248d', fontWeight: '900' }} className=''>Contact Me</h1>


                <Row className='align-items-center'>
                    <Col data-aos="fade-up" xs={12} md={4}>
                        <div>
                            <h1 style={{ color: 'white', fontWeight: '900' }} className=''>WE WOULD LOVE TO HEAR FROM YOU.</h1>
                            <p className='text-secondary'>Feel free to reach out if you want to collaborate with us, or simply have a call.</p>
                            <div data-aos="flip-right">
                                <p className='text-white m-0'><ion-icon data-aos="zoom-in-right" name="call-outline"></ion-icon> Phone</p>
                                <p className='text-white '>+8801622519799</p>
                            </div>
                            <div data-aos="flip-right">
                                <p className='text-white m-0'> <ion-icon data-aos="zoom-in-right"  name="mail-outline"></ion-icon> Email</p>
                                <p className='text-white'>rabbirajaul@gamil.com</p>
                            </div>
                            <div className='d-flex d-flex justify-content-around mx-5 '>
                                <ion-icon data-aos='zoom-in-right' size='large' style={{ color: 'blue' }} name="mail-outline"></ion-icon>
                                <ion-icon data-aos='zoom-in-down' size='large' style={{ color: 'blue' }} name="logo-facebook"></ion-icon>
                                <ion-icon data-aos='zoom-in-down' size='large' style={{ color: 'blue' }} name="logo-twitter"></ion-icon>
                                <ion-icon data-aos='zoom-in-down' size='large' style={{ color: 'blue' }} name="logo-github"></ion-icon>
                                <ion-icon data-aos='zoom-in-left' size='large' style={{ color: 'blue' }} name="logo-linkedin"></ion-icon>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" xs={12} md={8}>
                        <h1 style={{ color: 'white', fontWeight: '900' }}>Have Question? Write a Message</h1>
                        <form className='d-flex flex-column' action="https://formsubmit.co/rabbirajaul@gmail.com" method="POST">
                            <input className='bg-white' placeholder='Name' type="text" name="name" required />
                            <input className='bg-white mt-3' placeholder='Email' type="email" name="email" required />
                            <textarea className='bg-white mt-3' required placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://tender-hopper-af517c.netlify.app/" />


                            <Button variant='danger' className='mt-3' type="submit">Send</Button>
                        </form>



                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Contact;