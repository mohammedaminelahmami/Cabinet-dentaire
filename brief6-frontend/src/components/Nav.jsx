import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='parentNav'>
        <Link to='/SignUp' className='text_deco'><button type='submit' className='btn'>Create Account</button></Link>
        <Link to='/Login' className='text_deco'><button type='submit' className='btn'>Check Apointment</button></Link>
    </div>
  )
}

export default Nav