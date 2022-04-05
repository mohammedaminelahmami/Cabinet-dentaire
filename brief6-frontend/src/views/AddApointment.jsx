import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import img_back from '../imgs/previous.png'

function AddApointment() {

  // const [options, setOptions] = useState();

  const select = useRef('');

  const sujet = useRef('');
  const date = useRef('');

  const formData = new FormData;

  const HandleSubmit = ()=>{
    // e.preventDefault();
    formData.append('code', localStorage.getItem('myCode'));
    formData.append('sujet', sujet.current.value);
    formData.append('date', date.current.value);

    axios.post('http://localhost/brief6/Backend/reservation/rendezvous', formData)
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  axios.get('http://localhost/brief6/Backend/reservation/selectAllCreneau')
  .then(function(response){
    let options = response.data;
    // setOptions(options); // infinite loop !
    // console.log(options);
  })
  .catch(function(error){
    console.log(error);
  })

  const onChange = ()=>{

  }

  let today = new Date();
  let dd = today.getDate();
  let ddMax = today.getDate() + 7;
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
     dd = '0' + dd;
  }

  if (mm < 10) {
     mm = '0' + mm;
  }

  let maxDate = yyyy + '-' + mm + '-' + ddMax;
  let minDate = yyyy + '-' + mm + '-' + dd;

  // console.log(maxDate);
  // console.log(minDate);

  // console.log(localStorage.getItem('code'));
  return (
    <div>
      <Link to='/Rendezvous'><img src={img_back} width='45' className='img_back'/></Link>
      <div className='form__add'>
        <form onSubmit={HandleSubmit} className='form'>

          <div style={{marginLeft:30}}>
            <label>Date </label>
            <input type='date' min={minDate} max={maxDate} ref={date} style={{width:300, padding:6}}/>
          </div>

          <div>
            <label>Creneau </label>
            <select onChange={onChange} ref={select} style={{width:300, padding:6}}>
            {options.map(option => (  
              <option>  
                {option}  
              </option>  
            ))}
            </select>
          </div>

          <TextField
            className='form__input'
            label='Sujet'
            variant='outlined'
            type='name'
            required
            multiline
            rows='4'
            inputRef={sujet}
            >
          </TextField>
          <Button type='submit' variant='contained' color='primary' className='form_submit'>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default AddApointment