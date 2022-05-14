import React, { useState } from 'react'
import Precedent from '../components/Precedent'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import axios from 'axios'
import CardRend from '../components/CardRend'

function Rendezvous() {
  const [data, setData] = useState(false)

  const HandleClick = ()=>{
    let formData = new FormData();
    formData.append('code', localStorage.getItem("myCode"));

    axios.post('http://localhost/brief6/Backend/reservation/selectAppt', formData)
    .then(function(response){
      let data = response.data;
      setData(data)
      // data.forEach(dat => {
      //   console.log(dat);
      // })
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <div className='parentRendezvous'>
      <Precedent />
      <div className='parentCards'>
        {!data&&
          <>
            <Button onClick={HandleClick}>Get Apointments</Button>
            <Link to='/AddApointment' style={{textDecoration:"none", alignSelf:"center"}}><Button variant='contained' color='primary' endIcon={<DoneOutlineIcon />}>Add Apointment</Button></Link>
          </>
        }
        {data&&
          data.map((dat, index)=>{
            return(
              <div key={index}>
                <CardRend className='cardRend' creneau={dat.creneau} sujet={dat.sujet} date={dat.date} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Rendezvous