
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiLocationOn } from "react-icons/ci";

import Modal from 'react-bootstrap/Modal';

import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/urbanlogo.webp"
import { CiUser } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const TopNavbar = () => {

    const [show, setShow] = useState(false);
    const [locurl, setLocurl] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const urlNavigate=async () => {
        
        window.open(locurl, "_blank");
    }

    const getLocation = async function () {
        handleShow()

        try {

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;


                        setLocurl(googleMapsUrl)

                        console.log(googleMapsUrl);

                        // window.open(googleMapsUrl, "_blank");
                    },
                    (error) => {
                        console.error("Error getting location:", error.message);
                    }
                );
            } else {
                console.log("Geolocation is not supported by this browser.");
            }

        } catch (error) {

            console.log("error is");

        }

    }




    return (
        <>
            <Navbar className="bg-body-tertiary justify-content-evenly " bg="dark" data-bs-theme="dark">

                <img src={logo} alt="" id='logo' />

                <Form inline>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" onClick={getLocation} ><CiLocationOn /></InputGroup.Text>
                        <Form.Control
                            onClick={getLocation}

                            placeholder="Location"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>

                <AiOutlineShoppingCart id='cart' />


                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <CiUser id='cart' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="login"  >Login</Dropdown.Item>
                        <Dropdown.Item as={Link} to="register" >Register</Dropdown.Item>
                        <Dropdown.Item as={Link} to="dash" >Dashboard</Dropdown.Item>
                        <Dropdown.Item as={Link} to="home" >Home</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

            </Navbar>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Get Current Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {locurl}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={urlNavigate}  variant="primary">Go to Map</Button>
                </Modal.Footer>
            </Modal>


        </>


    )
}


export default TopNavbar
