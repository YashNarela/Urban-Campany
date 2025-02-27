import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IoMdStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";

import { Link } from 'react-router';

import accl from "../assets/acclean.webp"

const AcServices = () => {
  return (
    <div>

      <h3>Ac Services</h3>



      <div className='main-div' >

        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title> <h1>Ac Service and Repair</h1> </Card.Title>
              <Card.Text>
                <IoMdStar /> 4.82m
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
        <div>


          <Card style={{ width: '18rem' }}>
            <h3>Free Services</h3>
            <Card.Img variant="top" src={accl} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

                <div className='card-text' >
                <h4>Foam Jet Services</h4>
                <button>Add</button>
                </div>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className='listitem' >  Add more and save 23%</ListGroup.Item>
              <ListGroup.Item>Indoor unit cleaning with water jet spray</ListGroup.Item>
              <ListGroup.Item>Applicable for both window & split ACs</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link as={Link}  to="/" >View Details</Card.Link>
             
            </Card.Body>
          </Card>


        </div>

        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>


    </div>
  )
}

export default AcServices
