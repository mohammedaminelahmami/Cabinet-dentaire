import React, { useState } from 'react'
import Precedent from '../components/Precedent'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import choise from '../imgs/choise.svg'

function Rendezvous() {
  return (
    <div className='parentRendezvous'>
      <Precedent pagePre='/rendezvous' />
      <div className='parentCards'>
        <Link to='/getAppointments' style={{textDecoration:"none", alignSelf:"center"}}><Button variant='contained' size='large'>Get Apointments</Button></Link>
        <Link to='/AddApointment' style={{textDecoration:"none", alignSelf:"center"}}><Button variant='contained' size='large' color='primary' endIcon={<DoneOutlineIcon />}>Add Apointment</Button></Link>
        <img src={choise} width='450' style={{marginLeft:"2rem", marginTop:"3rem"}} />
      </div>
    </div>
  )
}

export default Rendezvous