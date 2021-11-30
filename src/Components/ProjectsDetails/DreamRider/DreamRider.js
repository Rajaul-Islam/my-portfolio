import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/ss/rider-full.png'
import img2 from '../../../images/ss/rider-bikes.png'
import img3 from '../../../images/ss/rider-signup.png'
import img4 from '../../../images/ss/rider-user.png'
import img5 from '../../../images/ss/rider-admin.png'
const DreamRider = () => {
    return (
        <Container className='text-white text-start'>
            <h1 style={{ color: '#df248d', fontWeight: '900' }} className='text-center mt-5 pt-'>Projects Details</h1>
            <Row>
                <Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <ul>
                                <li>Projects Name: Dream Rider</li>
                                <li>Projects Type: Full-Stack web application</li>
                                <li>Category: Online Bike shop</li>
                                <li>Technologies: React JS, Node Js, Express,  MongoDB, Css, React-Bootstrap, React-Router, Firebase Authentication, Heroku</li>
                            </ul>
                            <h3>Project OverView</h3>
                            <h5>Clint Site</h5>
                            <ul>
                                <li> Users can order a specific product.</li>
                                <li>User can monitor there orders and cancel specific order if they want.</li>
                                <li>Only Logged in users are able to order the bikes</li>
                                <li>We provide various bands motorbike.</li>

                            </ul>
                            <h5>Server Site</h5>





                            <ul>
                                <li>  Admin or admins can control this site.</li>
                                <li>Admin are able to promote a user as an admin. Admins are also able to control all order, products and control overall site.</li>
                                <li>User can make order and also can cancel the order if they want.</li>
                                <li>User can post review.</li>
                                <li>This site provide dashboard form user and admin.</li>

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
                                <Col xs={12} md={12}>
                                    <h4 className='mt-3'>Admin dashboard view</h4>
                                    <img className='img-fluid' src={img5} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>

                            <Row>
                                <Col xs={12} md={12}>
                                    <h4 >About Section View</h4>
                                    <img className='img-fluid' src={img2} alt="" />
                                </Col>
                                <Col xs={12} md={12}>
                                    <h4 className='mt-3'>User Login section view</h4>
                                    <img className='img-fluid' src={img3} alt="" />
                                </Col>
                                <Col xs={12} md={12}>
                                    <h4 className='mt-3'>User Dashboard View</h4>
                                    <img className='img-fluid' src={img4} alt="" />
                                </Col>
                            </Row>

                        </Col>

                    </Row>

                </Row>
            </Row>
        </Container>
    );
};

export default DreamRider;