import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img_back from '../imgs/previous.png'
import logout from '../imgs/logout.png'
import { Button } from '@mui/material'

function Precedent(props) {
  
  const HandleClick = ()=>{
    window.location.replace('http://localhost:3000/')
    localStorage.removeItem('myCode')
  }

  return (
    <div>
        <Link to={props.pagePre}><div><img src={img_back} width='25' className='img_back'/></div></Link>
        <Button onClick={HandleClick} style={{marginLeft:"4rem"}}><img src={logout} width='30' /></Button>
    </div>
  )
}

export default Precedent