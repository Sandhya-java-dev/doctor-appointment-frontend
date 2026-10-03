import React from 'react'
import ScheduleAppointment from './Components/ScheduleAppointment'
import ListAppointment from './Components/ListAppointment'
import Header from './Components/Header'
import Home from './Components/Home'
import {Link} from 'react-router'
import { BrowserRouter, Routes,Route } from 'react-router'
import Update from './Components/Update'
import Footer from './Components/Footer'


function App() {
  return (
  <div >

    <BrowserRouter>
      <Header/>
      
      <div className='content'>
      <Routes>
        <Route path={''} element={<Home/>}></Route>
        <Route path={'/list'} element={<ListAppointment/>}></Route>
        <Route path={'/schedule'} element={<ScheduleAppointment/>}></Route>
         <Route path={'/appointments/update/:id'} element={<Update/>}></Route>

      </Routes>
      </div>
      
    </BrowserRouter>
    
    <Footer/>
  </div>
  )
}

export default App