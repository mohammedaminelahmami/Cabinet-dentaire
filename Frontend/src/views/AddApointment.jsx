import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Precedent from '../components/Precedent';

function AddApointment() {

  const sujet = useRef('');
  const date = useRef('');
  let currentCren;

  const HandleSubmit = ()=>{
    const formData = new FormData();

    formData.append('code', localStorage.getItem('myCode'))
    formData.append('sujet', sujet.current.value)
    formData.append('date', date.current.value)
    formData.append('creneau', currentCren)

    axios.post('http://localhost/brief6/reservation/rendezvous', formData)
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    currentCren = event.target.value;
  }

  const handleOnchangeCheck = () => {
    const myFormData = new FormData();
    myFormData.append('datee', date.current.value)

    axios.post('http://localhost/brief6/reservation/checkAva', myFormData)
      .then(function (response) {

        // dates from databse
        let myData = response.data
        const option = document.getElementsByClassName('option')
        if(myData)
        { 
          for(let i = 0; i < option.length; i++) {
            for(let j = 0; j < myData.length; j++) {
              if(myData[j].creneau == option[i].value)
              {
                option[i].disabled = true;
              } else {
                option[i].disabled = false;
              }
            }
          }
        } else {
          for(let i = 0; i < option.length; i++) {
            option[i].disabled = false;
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  let today = new Date();
  let dd = today.getDate();
  let ddMax = today.getDate() + 10;
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

  let status = (ava)=>
  {
    return ava;
  }

  let i;

  let creneaux = ['9 - 10', '10 - 11', '11 - 12', '14 - 15', '15 - 16', '16 - 17'];

  return (
    <div>
      <Precedent pagePre='/rendezvous' />
      <div className='form__add'>
        <form onSubmit={HandleSubmit} className='form'>
          <div style={{marginLeft:30}}>
            <label>Date </label>
            <input onChange={handleOnchangeCheck} type='date' min={minDate} max={maxDate} ref={date} style={{width:300, padding:6}} required/>
          </div>

          <div>
            <label>Creneau </label>

            <select style={{width:300, padding:6}} onChange={handleOnChange} required>
              <option>Select Time</option>
                {creneaux.map((cren, index) =>{
                  cren === true ? status(true) : status(false)
                  return(
                    <option className='option' value={cren} key={index} >{cren}</option>
                  )
                })}
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