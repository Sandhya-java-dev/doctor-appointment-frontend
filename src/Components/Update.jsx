import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router'
import { useEffect } from 'react'




function Update() {

const{handleSubmit,register,setValue}=useForm()
const params=useParams()
console.log('-->',params)

const nav=useNavigate()

  async function retriveAppointment()
{
  const res=await axios.get(`http://localhost:8080/getById/${params.id}`)
  console.log(res.data)


  setValue('name',res.data.name)
  setValue('topic',res.data.topic)
  setValue('details',res.data.details)
  setValue('date',res.data.date)
  setValue('time',res.data.time)
}
  useEffect(()=>{retriveAppointment()} ,[])


 async function processData(validData)
    {
       // const res = await axios.put(`http://localhost:3000/appointments/${params.id}/`,validData)
        const res = await axios.put(`http://localhost:8080/update/${params.id}`,validData)
        alert('updated successfully')
        nav('/list')
        
    }
  


  return (
   <div style={{backgroundColor:'lightyellow'}}>
        <form className='container w-50' onSubmit={handleSubmit(processData)}>
            <label className='form-label'>Name :</label>
            <input type='text' className='form-control'  {...register('name')}/>


              <label className='form-label'>Topic :</label>
            <input type='text' className='form-control'  {...register('topic')}/>



              <label className='form-label'>Details :</label>
                <textarea className='form-control'  {...register('details')}></textarea>



              <label className='form-label'>Date :</label>
            <input type='date' className='form-control'  {...register('date')}/>


              <label className='form-label'>Time :</label>
            {/* <input type='time' className='form-control'  {...register('time')}/> */}
 
             <select className="form-control" {...register('time')}>
  <option value="">Select Time</option>
  <option value="09:00 AM">09:00 AM</option>
  <option value="09:30 AM">09:30 AM</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="10:30 AM">10:30 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="11:30 AM">11:30 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="12:30 PM">12:30 PM</option>
  <option value="01:00 PM">01:00 PM</option>
  <option value="01:30 PM">01:30 PM</option>
  <option value="02:00 PM">02:00 PM</option>
  <option value="02:30 PM">02:30 PM</option>
  <option value="03:00 PM">03:00 PM</option>
  <option value="03:30 PM">03:30 PM</option>
  <option value="04:00 PM">04:00 PM</option>
  <option value="04:30 PM">04:30 PM</option>
  <option value="05:00 PM">05:00 PM</option>
  <option value="05:30 PM">05:30 PM</option>
</select>


              
            <button type='submit' className='btn btn-outline-success'>Update +</button>
            
        </form>




    </div>
  )
}


export default Update