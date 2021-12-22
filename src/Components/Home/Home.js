import React from 'react';
import { Container } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Skills></Skills> */}

            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;