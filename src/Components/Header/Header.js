import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css'
import pic from '../../../src/images/rabbi3.jpg'
import Typewriter from "typewriter-effect";
const Header = () => {

    return (

        <Container id='home' className='mb-5 my-5 pt-5' >
            <Row className='align-items-center '>
                <Col xs={12} md={6}>

                    <img data-aos="zoom-in-right" className='img-fluid circle' src={pic} alt="" />

                </Col>
                <Col className='text-white text-start ' xs={12} md={6}>
                    <h1>HI THERE!</h1>
                    <h1>I am Rajaul Islam</h1>
                    <h3>I am a<span style={{ color: '#df248d', fontWeight: '900' }}><Typewriter
                        options={{
                            strings: [
                                "Junior Full-Stack Web Developer",
                                "React Developer",
                                "Programmer"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,

                            fontSize: 50
                        }}
                    /></span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium cum quibusdam enim maiores porro ea in corrupti vel, adipisci reprehenderit atque ipsam vitae, fugit, dolore aliquid quas consequatur! Amet nisi saepe rem itaque numquam facilis molestiae quaerat repudiandae similique quos magni labore a alias, vel mollitia esse voluptas odit?</p>
                    <a target="_blank" href="https://drive.google.com/file/d/1utYstuf-m2My4fSEmYrBsgbVhtd0DXd-/view?usp=sharing"><Button variant="danger">Resume</Button></a>
                    <div >
                        <a data-aos="fade-down-right" className='rounded-button' href="https://www.facebook.com/rajaul.rabbi.5" target='_blank'>
                            <ion-icon size="large" name="logo-facebook"></ion-icon>
                        </a>
                        <a data-aos="zoom-in-up" className='rounded-button' href="https://www.linkedin.com/in/rajaul-islam-60a9a8216/" target='_blank'>
                            <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        </a>
                        <a data-aos="fade-down-left" target='_blank' className='rounded-button' href="https://github.com/Rajaul-Islam">
                            <ion-icon size="large" name="logo-github"></ion-icon>
                        </a>
                    </div>

                </Col>

            </Row>
        </Container>

    );
};

export default Header;