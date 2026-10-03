import { useEffect,useState } from "react"
import axios from "axios"
import {Link} from 'react-router'

function ListAppointment() {
    const[appointments,setAppointment]=useState([])


   async function getAppointments()
    {
      //const res =await axios.get('http://localhost:3000/appointments')
       const res =await axios.get('http://localhost:8080/get')
       console.log('-->',res.data)
       setAppointment(res.data)
    }
    useEffect(()=>{getAppointments()},[])



    //to delete record
    
   async function delAppointments(aId)
    {
     // const res =await axios.delete(`http://localhost:3000/appointments/${aId}/`)
       const res =await axios.delete(`http://localhost:8080/delete/${aId}`)
       console.log('-->',res)
       alert('Deleted..!')
         await getAppointments()
    }


  return (
    <div className="appointment-table-container">
         <h3 style={{textAlign:"center"}} > <i class="bi bi-calendar3"></i>    Appointment</h3> <br /> <br />
         <table className="appointment-table">
            <thead>
          
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Topic</th>
                    <th>Details</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Action</th>

                </tr>
            </thead>
            
            <tbody>
                {
                    appointments.map(appointment=> <tr>
                                                     <td>{appointment.id}</td>
                                                     <td>{appointment.name}</td>
                                                     <td>{appointment.topic}</td>
                                                     <td>{appointment.details}</td>
                                                     <td>{appointment.date}</td>
                                                     <td>{appointment.time}</td>
                                                     <td> 
                                                        <Link className='btn btn-secondary btn-sm me-2' to={`/appointments/update/${appointment.id}`} >Update</Link>
                                                        <button className='btn btn-danger btn-sm' onClick={()=>{ delAppointments(appointment.id)}}>Delete  <i class="bi bi-trash3"></i></button>
                                                     </td>

                                                   </tr>


                    )
                }


            </tbody>
         </table>
    </div>
  )
}

export default ListAppointment