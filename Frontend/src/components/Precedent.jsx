import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img_back from '../imgs/previous.png'
import logout from '../imgs/logout.png'
import { Button } from '@mui/material'

function Precedent(props) {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('myCode'))
    {
      setLoggedIn(true)
    }
  }, [])

  const HandleClick = ()=>{
    window.location.replace('http://localhost:3000/')
    localStorage.removeItem('myCode')
  }

  return (
    <div className='precedent_logout'>
      <Link to={props.pagePre} className='div_title' style={{marginBottom:"2.5rem"}}>
        <div><img src={img_back} width='25' className='img_back'/></div>
        <p className='title_log_pre'>Précedent</p>
      </Link>

      {loggedIn&&
        <Button onClick={HandleClick} className='div_title' style={{marginLeft:"4rem"}}><img src={logout} width='30' />
          <p className='title_log'>Se déconnecter</p>
        </Button>
      }
    </div>
  )
}

export default Precedent