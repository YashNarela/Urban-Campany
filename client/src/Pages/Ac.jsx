import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import cool from "../assets/Ac.webp"
import {useNavigate} from "react-router"

const Pureit = ({ setModalShow, modalShow }) => {

 const navigate=useNavigate()
  


  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Acc  & Applicances 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                 <img src={cool} alt="" />
             
                <Col xs={6} md={4}>
                  Ac repair and services
                </Col>
              </Col>
              <Col xs={6} md={4}>
                
              </Col>
            </Row>

        
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={() => { navigate("/acservice")}} >Services</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
    <div>
 

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />


    </div>
  )
}

export default Pureit
