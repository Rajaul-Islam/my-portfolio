import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/ss/osud-full.png'
import img2 from '../../../images/ss/osud-about.png'
import img3 from '../../../images/ss/osud-login.png'
const OsudDokan = () => {
    return (
        <div className='my-5 pt-5'>
            <Container className='text-white text-start'>
                <h1 style={{ color: '#df248d', fontWeight: '900' }} className='text-center mt-5 pt-'>Projects Details</h1>
                <Row>
                    <Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <ul>
                                    <li>Projects Name: Osud Dokna</li>
                                    <li>Projects Type: Single Page web application</li>
                                    <li>Category: Online Store, Medicine Store</li>
                                    <li>Technologies: React JS, Css, React-Bootstrap, React-Router, Firebase Authentication</li>
                                </ul>
                                <h3>Project OverView</h3>
                                <ul>
                                    <li>This is online base healthcare solution</li>
                                    <li>We provide medicine and wide choice of healthcare products including wellness products, vitamins, diet/fitness supplements, herbal products, pain relievers, diabetic care kits, baby/mother care products, beauty care products, Personal products for men & women, variety of testing instrument and surgical supplies</li>
                                    <li>Our Aim is to ensure you with best & convenient healthcare, convenient and safe and secure online shopping experience</li>
                                    <li>We endeavor to provide products at a very competitive price coupled with highest standards of delivery to you</li>
                                    <li>our customers will get to know all about medicines</li>
                                </ul>


                            </Col>

                        </Row>
                        <h1 style={{ color: '#df248d', fontWeight: '900' }} className='text-center mt-5'>Projects Screen-Shorts</h1>
                        <Row>

                            <Col xs={12} md={5}>
                                <h4>Home Page View</h4>
                                <img className='img-fluid' src={img} alt="" />
                            </Col>
                            <Col xs={12} md={7}>

                                <Row>
                                    <Col xs={12} md={12}>
                                        <h4 >About Section View</h4>
                                        <img className='img-fluid' src={img2} alt="" />
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <h4 className='mt-3'>User Login section view</h4>
                                        <img className='img-fluid' src={img3} alt="" />
                                    </Col>
                                </Row>

                            </Col>

                        </Row>

                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default OsudDokan;