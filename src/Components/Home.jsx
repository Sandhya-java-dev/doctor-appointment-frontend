import React from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const navigate=useNavigate()
  return (
    <div  className='home'>
      <br /><br />
      <h1>Manage Your 
        <br />
        Appointments Easily
      </h1>
      <p>Book,view and manage appointments
        <br />
        in one place
      </p>
      <br />
      <button onClick={()=>navigate('/schedule')}>book appointment</button>
      
    
    
    
    </div>
    
  )
}

export default Home