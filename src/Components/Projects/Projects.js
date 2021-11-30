import React, { useEffect } from 'react';
import './Projects.css'
import { ButtonGroup, Button, ButtonToolbar, Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../src/images/osud.PNG'
import img2 from '../../../src/images/dream.PNG'
import img3 from '../../../src/images/travel.PNG'
import aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        aos.init({
            offset: 100,
            duration: 2000,
            easing: 'ease',
            mirror: "false",

        });
    })
    return (
        <div id='projects' className='py-5 my-5'>
            <Container className='text-start text-secondary'>
                <div data-aos='fade-down'>
                    <h1 style={{ color: '#df248d', fontWeight: '900' }} className=''>Project Highlights</h1>
                   
                </div>


                <div>
                    <Row xs={1} md={3} className="g-4">

                        <Col data-aos="zoom-in-right">
                            <Card className='border-0'>
                                <div className='img-hover'>

                                    <Card.Img className='img-fluid ' variant="top" src={img1} style={{ maxHeight: '200px' }} />
                                </div>

                                <Card.Body style={{ backgroundColor: '#121526' }}>
                                    <Card.Title style={{ backgroundColor: '#121526', color: 'white' }}>Osud Dokan</Card.Title>
                                    <Card.Text style={{ backgroundColor: '#121526' }}>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <ButtonToolbar data-aos='flip-down' style={{ backgroundColor: '#121526' }} aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mx-auto" aria-label="Second group">
                                            <Button variant='danger'>Git link</Button>
                                            <Button variant='danger'>Live Site</Button>
                                            <Button as={Link} to='/osud' variant='danger'>Details</Button>
                                            
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col >
                            <Card data-aos="zoom-in-up" className='border-0'>
                                <div className='img-hover'>
                                    <Card.Img className='img-fluid ' variant="top" src={img2} style={{ maxHeight: '200px' }} />
                                </div>
                                <Card.Body style={{ backgroundColor: '#121526' }}>
                                    <Card.Title style={{ backgroundColor: '#121526', color: 'white' }}>Dream Rider</Card.Title>
                                    <Card.Text style={{ backgroundColor: '#121526' }}>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <ButtonToolbar data-aos='flip-down' style={{ backgroundColor: '#121526' }} aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mx-auto" aria-label="Second group">
                                            <Button variant='danger'>Git link</Button>
                                            <Button variant='danger'>Live Site</Button>
                                            <Button as={Link} to='/rider' variant='danger'>Details</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col data-aos="zoom-in-right">
                            <Card className='border-0'>
                                <div className='img-hover'>
                                    <Card.Img className='img-fluid ' variant="top" src={img3} style={{ maxHeight: '200px' }} />
                                </div>
                                <Card.Body style={{ backgroundColor: '#121526' }}>
                                    <Card.Title style={{ backgroundColor: '#121526', color: 'white' }}>Travel Go</Card.Title>
                                    <Card.Text style={{ backgroundColor: '#121526' }}>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <ButtonToolbar style={{ backgroundColor: '#121526' }} aria-label="Toolbar with button groups">
                                        <ButtonGroup data-aos='flip-down' className="mx-auto" aria-label="Second group">
                                            <Button variant='danger'>Git link</Button>
                                            <Button variant='danger'>Live Site</Button>
                                            <Button as={Link} to='/travel' variant='danger'>Details</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Card.Body>

                            </Card>
                        </Col>


                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Projects;