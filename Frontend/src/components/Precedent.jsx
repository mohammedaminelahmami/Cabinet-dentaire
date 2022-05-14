import React from 'react'
import { Link } from 'react-router-dom'
import img_back from '../imgs/previous.png'

function Precedent() {
  return (
    <div>
        <Link to='/'><div><img src={img_back} width='25' className='img_back'/></div></Link>
    </div>
  )
}

export default Precedent