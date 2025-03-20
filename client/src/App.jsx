import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Layout';
import Home from './Pages/Home';
import Insert from './Pages/Insert';
import Display from './Pages/Display';
import Login from './Pages/Login';

import { ToastContainer, toast } from 'react-toastify';
import AcServices from "./Pages/AcServices"
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import EditData from './Pages/EditData';
import InsertData from './Pages/InsertData';

function App() {


  return (
    <>

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='/insert' element={<Insert />} />
            <Route path='/display' element={<Display />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/insertdata' element={<InsertData />}/>
            <Route path='/acservice' element={< AcServices />} />
            <Route path='/edit/:id' element={< EditData />} />
          </Route>


        


         

        </Routes>


      </BrowserRouter>


      <ToastContainer />

    </>
  )
}

export default App
