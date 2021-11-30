import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/ss/travel-full.png'
import img2 from '../../../images/ss/travel-Oconfirm.png'
import img3 from '../../../images/ss/travel-admin.png'
import img4 from '../../../images/ss/rider-user.png'
import img5 from '../../../images/ss/rider-admin.png'
const TravelGo = () => {
    return (
        <div>
            <Container className='text-white text-start'>
                <h1 style={{ color: '#df248d', fontWeight: '900' }} className='text-center mt-5 pt-'>Projects Details</h1>
                <Row>
                    <Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <ul>
                                    <li>Projects Name: Travel Go</li>
                                    <li>Projects Type: Full-Stack web application</li>
                                    <li>Category: Online Tourism Package</li>
                                    <li>Technologies: React JS, Node Js, Express,  MongoDB, Css, React-Bootstrap, React-Router, Firebase Authentication, Heroku</li>
                                </ul>
                                <h3>Project OverView</h3>
                                <ul>
                            
                                    <li> User can order random packages</li>
                                    <li>User able to add a products to home section</li>
                                    <li> User delete there order</li>
                                    <li>User also able to see all order list. They can confirm the pending order.</li>
                                    <li>We provide best Travel insurance from Bangladesh for Schengen countries, USA, Canada and any countries of the world where required Travel insurance.</li>
                                </ul>


                            </Col>

                        </Row>
                        <h1 style={{ color: '#df248d', fontWeight: '900' }} className='text-center mt-5'>Projects Screen-Shorts</h1>
                        <Row>

                            <Col xs={12} md={6}>

                                <Row>
                                    <Col xs={12} md={12}>
                                        <h4>Home Page View</h4>
                                        <img className='img-fluid' src={img} alt="" />
                                    </Col>
                                  
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>

                                <Row>
                                    <Col xs={12} md={12}>
                                        <h4 >Order Confirmation View</h4>
                                        <img className='img-fluid' src={img2} alt="" />
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <h4 className='mt-3'>All Order List</h4>
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

export default TravelGo;