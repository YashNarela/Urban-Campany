import React, { useState } from 'react'


import inst from "../assets/electrician.webp"
import cool from "../assets/Ac.webp"
import women from "../assets/women.webp"
import Purifier from "../assets/waterpurifer.webp"
import clean from "../assets/cleaning.webp"
import Mssg from "../assets/Message.webp"
import Pureit from './Ac'
const Home = () => {

  const [modalShow, setModalShow] = useState(false)


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
                <img className="grid-img" src={Purifier} alt=""  />
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



    </div>
  )
}

export default Home
