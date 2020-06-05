import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => (
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src="/twitch-tv-logo.png"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <img
                    alt=""
                    src="/react.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Twitch New API Demo
            </Navbar.Brand>
            <Navbar id="basic-navbar-nav">
                <Nav variant="tabs" defaultActiveKey="#about">
                    <Nav.Item>
                        <Nav.Link eventKey="about" href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="top-games" href="#top-games">Top Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="lol" href="#lol">League of Legends</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="lor" href="#lor">Legends of Runeterra</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Navbar>
    </>
)

export default NavigationBar