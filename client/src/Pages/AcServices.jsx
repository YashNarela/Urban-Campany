import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IoMdStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

import accl from "../assets/acclean.webp"


import { Add, Remove } from "../redux/CreateSlice"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';



import CardLayout from './CardLayout';
import SliderCard from './SliderCard';
const AcServices = () => {

  const [cardata, setCarddata] = useState([])

  const selectIt = useSelector((state) => (state.cart.value))

  const dispatch = useDispatch()

  console.log(selectIt);



  const AddIt = () => {




    dispatch(Add())



  }

  const RemoveIt = () => {

    dispatch(Remove())
  }



  return (
    <div>

      <h3>Ac Services</h3>
      <Card />


      <div className='main-div' >

        <CardLayout />
        <div>


          <Card style={{ width: '18rem' }}>
            <h3>Free Services</h3>
            <Card.Img variant="top" src={accl} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

                <div className='card-text' >
                  <h4>Foam Jet Services</h4>

                </div>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className='listitem' >  Add more and save 23%</ListGroup.Item>
              <ListGroup.Item>Indoor unit cleaning with water jet spray</ListGroup.Item>
              <ListGroup.Item>   <Button variant="success" size="sm" onClick={AddIt}  >Add</Button>


                {selectIt}

                <Button variant="danger" size="sm" onClick={RemoveIt} >Remove</Button></ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link as={Link} to="/" >View Details</Card.Link>

            </Card.Body>
          </Card>


        </div>

        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Cart</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
              <Card.Text>




              </Card.Text>

              <ListGroup className="list-group-flush">
                <ListGroup.Item className='listitem' >    <Button  >-</Button>{selectIt}<Button>+</Button></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>




      <SliderCard />
    </div>
  )
}

export default AcServices
