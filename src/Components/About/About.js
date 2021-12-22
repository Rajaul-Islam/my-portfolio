import React from 'react';
import './About.css'
import { Col, Container, Row, Button } from 'react-bootstrap';
import pic from '../../../src/images/rabbi1.jpg'
import Typewriter from "typewriter-effect";
const About = () => {
    return (
        <div id='about' className='pt-5'>
            <Container className='text-start pt-5' >
                <h1 data-aos="fade-right" style={{ color: '#df248d', fontWeight: '900' }} className=''>About Me</h1>
                <Row className='align-items-center '>
                    <Col className='text-white text-start ' xs={12} md={6}>
                        <h1 style={{ color: 'white', fontWeight: '900' }}>I'M <span className='text-danger'>RAJAUL ISLAM</span> </h1>
                        <p className='w-50 text-warning'>I am a junior wev developer. I have a good knowledge of React JS, Node JS. I love spending time on fixing little details and optimizing web app. I also have good knowledge on programming. I love to explore new Technologies.</p>
                        <Button variant="danger">HIRE ME</Button>

                    </Col>

                    <Col xs={12} md={6}>

                        <img className='img-fluid w-75 grayscale' src={pic} alt="" />

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;