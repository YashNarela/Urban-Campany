import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IoMdStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";
const CardLayout = () => {
  return (
    <div>
      

          <div>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                      <Card.Title> <h1>Ac Service and Repair</h1> </Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                      <ListGroup.Item><TiTick /> UC COVER  </ListGroup.Item>
                      <ListGroup.Item>select a service </ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
              </Card>

          </div>
    </div>
  )
}

export default CardLayout
