import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = () => {
    return (
        <Container className='py-5'>
            <h1 style={{ color: '#df248d', fontWeight: '900' }} className=''>My Blogs</h1>
            <Row xs={1} md={2} className="cards-list g-4">

                <Col>
                    <Link className='text-decoration-none' to='/reactBlog'>
                    <div className="blog">
                        <div className="card_image"> <img src="https://miro.medium.com/max/868/0*Bs43h1reQ0NZ2C91.png" /> </div>
                        <div className="card_title title-white">
                            <p>React Blog</p>
                        </div>
                    </div>
                    </Link>
                </Col>
                <Col>
                    <div className="blog">
                        <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                        <div className="card_title title-white">
                            <p>html coming soon</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="blog">
                        <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                        <div className="card_title title-white">
                            <p>css coming soon</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;