

import { useParams } from "react-router"
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from "axios"
import { useNavigate } from 'react-router';

const EditData = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [inp, setInp] = useState({})
    console.log(inp);

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(inp);

        let api = import.meta.env.VITE_API_URL
        let rsp = await axios.post(`${api}/user/update/?id=${id}`, inp);


        navigate("/dash")





    };



    function onChangeHandler(e) {

        const { name, value } = e.target

        setInp((val) => ({ ...val, [name]: value }))




    }

    let takedata = async () => {
        let api = import.meta.env.VITE_API_URL
        try {
            let dashData = await axios.get(`${api}/user/data/?id=${id}`);

            console.log(dashData);

            setInp(dashData.data)




        } catch (error) {

        }
    }

    useEffect(() => {

        takedata()

    }, [])



    return (
        <div>

            <h3>Edit It {id}</h3>


            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"

                            value={inp.first}

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
                            value={inp.last}

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
                                value={inp.email}
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
                        <Form.Control type="text" name='city' placeholder="City" value={inp.city} required onChange={onChangeHandler} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" name='state' value={inp.state} required onChange={onChangeHandler} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" name='zip' value={inp.zip} required onChange={onChangeHandler} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="text" placeholder="password" name='password' value={inp.password} required onChange={onChangeHandler} />
                    <Form.Control.Feedback type="invalid">

                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Select aria-label="Default select example" value={inp.as} onChange={onChangeHandler} name='as'>

                    <option value="admin">Admin</option>
                    <option value="user">User</option>

                </Form.Select>
                <Button type="submit">Submit form</Button>

            </Form>




        </div>
    )
}

export default EditData
