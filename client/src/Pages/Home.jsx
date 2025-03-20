import React, { useEffect, useState } from 'react'


import inst from "../assets/electrician.webp"
import cool from "../assets/Ac.webp"
import women from "../assets/women.webp"
import Purifier from "../assets/waterpurifer.webp"
import clean from "../assets/cleaning.webp"
import Mssg from "../assets/Message.webp"
import Pureit from './Ac'
import SliderCard from './SliderCard'
import { useNavigate } from 'react-router'

import axios from "axios"
import { toast } from 'react-toastify'
const Home = () => {

  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false)



  async function AuthCheck() {


    let obj =  await JSON.parse(localStorage.getItem("ob"))

    let token = obj.toki


    console.log(token);
    

    if (!token) {

      navigate("/login")

      toast.error("Please login first")

    }


    let baseurl = import.meta.env.VITE_API_URL

    let api = `${baseurl}/user/auth`

    let rsp = await axios.post(api, null, {
      headers: { "Authorization": `Bearer ${token}` }
    });

    console.log(rsp.data);




  }

  useEffect(() => {

    AuthCheck()
  }, [])




  return (
    <div>


      <section className="sc2" >

        <div className="sc2-container-1">

          <div>
            <h2>Home services at your doorstep</h2>
          </div>

          <div className="sc2-heading" >
            <h4>What are you looking for?</h4>


            <div className="sc2-grid" >


              <div className="grid-container" >
                <img className="grid-img" src={women} alt="" />
                <p>Womens Salon</p>
              </div>
              <div className="grid-container" >
                <img className="grid-img" src={Purifier} alt="" />
                <p  >Purifier</p>
              </div>
              <div className="grid-container" >
                <img className="grid-img" src={cool} alt="" onClick={() => setModalShow(true)} />
                <p>Ac</p>
              </div>
              <div id="menHair" className="grid-container" >
                <img className="grid-img" src="/images/men.webp" alt="" />
                <p>Hair &Style</p>
              </div>


              <div className="grid-container" >
                <img className="grid-img" src={inst} alt="" />
                <p>Electric</p>
              </div>
              <div className="grid-container" >
                <img className="grid-img" src={clean} alt="" />
                <p>cleaner</p>
              </div>
            </div>


          </div>

        </div>

        <div className="sc2-container-2">

          <div className="sc2-grid ">


            <div>
              <img className="sc2-img" src={Mssg} alt="" />
            </div>

          </div>

        </div>


      </section>





      <Pureit modalShow={modalShow} setModalShow={setModalShow} />

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>


      </div>

      <SliderCard />



    </div>
  )
}

export default Home
