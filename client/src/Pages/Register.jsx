import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from "axios"

const Register = () => {



  const [inp, setInp] = useState({})
  console.log(inp);
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(inp);

    let api = import.meta.env.VITE_API_URL
    let rsp = await axios.post(`${api}/user/createuser`, inp);


    console.log(rsp.data);



  };



  function onChangeHandler(e) {

    const { name, value } = e.target

    setInp((val) => ({ ...val, [name]: value }))




  }



  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Yash"
              name='first'
              onChange={onChangeHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name='last'
              defaultValue="Narela"
              onChange={onChangeHandler}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                name='email'
                aria-describedby="inputGroupPrepend"
                required
                onChange={onChangeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name='city' placeholder="City" required onChange={onChangeHandler} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" name='state' required onChange={onChangeHandler} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" name='zip' required onChange={onChangeHandler} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>password</Form.Label>
          <Form.Control type="text" placeholder="password" name='password' required onChange={onChangeHandler} />
          <Form.Control.Feedback type="invalid">

          </Form.Control.Feedback>
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={onChangeHandler} name='as'>

          <option value="admin">Admin</option>
          <option value="user">User</option>

        </Form.Select>
        <Button type="submit">Submit form</Button>

      </Form>


    </div>
  )
}

export default Register
