import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../assets/logo.svg';
import './Navbar.css';
import '../../assets/profile.svg';

const ShipmentNavbar = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand>
            <img
            src="logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            />
        </Navbar.Brand>
        <Navbar.Text>Intugine</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
            Home 
            </Nav.Link>
            <Nav.Link>
            Brand
            </Nav.Link>
            <Nav.Link>
            Transporters
            </Nav.Link>
            <img
                src="profile.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
            />
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default ShipmentNavbar;