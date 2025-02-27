
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/urbanlogo.webp"
import { CiUser } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router';

const TopNavbar = () => {
    return (
 <>
            <Navbar className="bg-body-tertiary justify-content-evenly " bg="dark" data-bs-theme="dark">
 
                 <img src={logo} alt=""  id='logo'  />
                 
                <Form inline>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1"><CiLocationOn /></InputGroup.Text>
                        <Form.Control
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

                <AiOutlineShoppingCart  id='cart' />
               

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <CiUser id='cart' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="login"  >Login</Dropdown.Item>
                        <Dropdown.Item  as={Link} to="register" >Register</Dropdown.Item>
                        <Dropdown.Item  as={Link} to="dash" >Dashboard</Dropdown.Item>
                        <Dropdown.Item  as={Link} to="home" >Home</Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown>
            
            </Navbar>
 
 </>

      
    )
}


export default TopNavbar
