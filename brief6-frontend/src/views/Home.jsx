import { Typography } from '@mui/material'
import Nav from '../components/Nav';
import React from 'react'
import imgHome from '../imgs/img1.svg'

function Home() {
  return (
    <div className='parentHome'>
        <div>
            <img className='imgHome' src={imgHome} />
        </div>
        <Nav />
    </div>
  )
}

export default Home