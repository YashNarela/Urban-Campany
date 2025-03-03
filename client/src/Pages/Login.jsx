
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router';
const Login = () => {


  const navigate = useNavigate()

  const [inp, setInp] = useState({})

  const handleSubmit = async (e) => {

    e.preventDefault()


    let api = import.meta.env.VITE_API_URL
    let rsp = await axios.post(`${api}/user/login`, inp);

    console.log(rsp.data);

    localStorage.setItem("ob", JSON.stringify({ userData: rsp.data.loginrsp ,toki:rsp.data.toki}))

    navigate("/home")

  };



  function onChangeHandler(e) {

    const { name, value } = e.target

    setInp((val) => ({ ...val, [name]: value }))




  }



  return (
    <div>

      <h3>Login</h3>


      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={onChangeHandler} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' onChange={onChangeHandler} />
        </Form.Group>

        <Form.Select aria-label="Default select example" onChange={onChangeHandler} name='as'>

          <option value="admin">Admin</option>
          <option value="user">User</option>

        </Form.Select>
        <Button variant="primary" type="submit" onClick={handleSubmit}  >
          Login
        </Button>
      </Form>

    </div>
  )
}

export default Login
