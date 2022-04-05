import React, { useState } from 'react'
import Precedent from '../components/Precedent'
import CardRend from '../components/CardRend'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import axios from 'axios'

function Rendezvous() {

  // const [data, setData] = useState();

  let formData = new FormData;
  formData.append('code', localStorage.getItem("myCode"));

  const HandleClick = ()=>{
    axios.post('http://localhost/brief6/Backend/reservation/selectAppt', formData)
    .then(function(response){
      let data = response.data;
      // setData(data);
      // console.log(data);
      data.forEach(dat => {
        console.log(dat);
      });
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  return (
    <div className='parentRendezvous'>
      <Precedent /> {/* Logout */}
      <div className='parentCards'>

        <Button onClick={HandleClick}>Get Apointments</Button>
        
        <CardRend className='cardRend' creneau = "14 - 15" />
        
        {/* <CardRend className='cardRend' creneau = "14 - 15" />
        <CardRend className='cardRend' creneau = "17 - 18" /> */}

        <Link to='/AddApointment' style={{textDecoration:"none", alignSelf:"center"}}><Button variant='contained' color='primary' endIcon={<DoneOutlineIcon />}>Add Apointment</Button></Link>
      </div>
    </div>
  )
}

export default Rendezvous