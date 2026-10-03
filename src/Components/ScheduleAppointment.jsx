import {useForm} from 'react-hook-form'
import axios from 'axios'

function ScheduleAppointment() {
    const{handleSubmit,register,reset}=useForm()

    function processData(validData)
    {
        //console.log('valid data-->',validData)
        //api-request =post
        //axios.post('http://localhost:5173/appointment',validData)
        axios.post('http://localhost:8080/add',validData)
        alert('scheduled successfully')
        reset()
    }
  return (
    <div className="s-page">
        <form className='container w-50 schedule-form' onSubmit={handleSubmit(processData)}>
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




            <button type='submit' className='btn btn-outline-success'>Schedule +</button>
            <button type='button' onClick={()=>{reset()}} className='btn btn-outline-warning'>reset</button>
            
        </form>




    </div>
  )
}

export default ScheduleAppointment