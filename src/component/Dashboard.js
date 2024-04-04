import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faTableCells, faInbox } from '@fortawesome/free-solid-svg-icons';
import GmailLogo from "../assets/images/gmail.png";
import ProfileImg from "../assets/images/profile.jpeg";
import Sidebar from './Sidebar';

const Dashboard = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid >
                    <Navbar.Brand href="#" onClick={toggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Brand>
                    <Navbar.Brand href="#">
                        <img src={GmailLogo} className='gm-logo' alt="Gmail Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        </Nav>
                        <Form className="d-flex justify-content-center align-items-center flex-grow-1">
                            <Form.Control
                                type="search"
                                placeholder="Search mail"
                                className="search-mail"
                                aria-label="Search"
                                style={{width:"70%"}}
                            />
                        </Form>
                        <button className="rg-btn">
                            <FontAwesomeIcon icon={faGear} className='rg-icon' />
                        </button>
                        <button className="rg-btn">
                            <FontAwesomeIcon icon={faTableCells} className='rg-icon' />
                        </button>
                        <button className="rg-btn">
                            <img src={ProfileImg} className='profile-img' alt="Profile" />
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    );
}

export default Dashboard;
