import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdDeleteSweep } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router";
const Dashboard = () => {

  const navigate = useNavigate()

  const [inp, setInp] = useState([])

  const [bl, setBl] = useState(false)

  const [cnt, setCnt] = useState(0)


  let localdata = JSON.parse(localStorage.getItem("ob"));
  console.log(localdata);
  const clickHandler = () => {

    setBl(true)

  }


  const DeleteData = async (id) => {


    try {


      let api = import.meta.env.VITE_API_URL

      let dashData = await axios.get(`${api}/user/delete/?id=${id}`);

      console.log(dashData);
      LoadData()

    } catch (error) {

    }



  }

  const LoadData = async () => {


    try {


      let api = import.meta.env.VITE_API_URL

      let dashData = await axios.get(`${api}/user/getdata`);

      console.log(dashData.data);

      setInp(dashData.data)


    } catch (error) {

    }

  }

  useEffect(() => { LoadData() }, [])


  const UpdateData = async (id) => {


    navigate(`/edit/${id}`)



  }


  let sno = 0;

  let ansdata = inp.map((key) => (

    <tr>

      <td>{++sno}</td>
      <td>{key._id}</td>
      <td>{key.first}</td>
      <td>{key.last}</td>
      <td>{key.email}</td>
      <td>{key.city}</td>
      <td>{key.zip}</td>
      <td>{key.state}</td>
      <td onClick={() => { DeleteData(key._id) }} ><MdDeleteSweep /></td>

      <td onClick={() => { UpdateData(key._id) }} ><AiFillEdit /></td>

    </tr>

  ))

  return (
    <>


      <div className="sidebar">
        <div>
          <h2>Admin Dashboard</h2>
          <ul>
            <li><a href="#" onClick={clickHandler} >Registers</a></li>
            <li><a href="users.html">Registered Users</a></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <h1>Welcome, {localdata.userData.first}</h1>


        </div>
        <div className="card">
          <h3>Total Registered Users: <span id="userCount">{sno}</span></h3>
        </div>





        <div className="table-container">
          <h3>Registered Users</h3>
          <table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>City</th>
                <th>Zip</th>
                <th>State</th>
                <th>Delete</th>
                <th>Update</th>

              </tr>

            </thead>



            {

              bl ? (<>
                <tbody id="tbody" >


                  {ansdata}

                </tbody>
              </>) : (<>

              </>)


            }


          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard
