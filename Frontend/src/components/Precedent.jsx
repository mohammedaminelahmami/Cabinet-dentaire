import React from 'react'
import { Link } from 'react-router-dom'
import img_back from '../imgs/previous.png'

function Precedent() {
  return (
    <div>
        <Link to='/'><img src={img_back} width='45' className='img_back'/></Link>
    </div>
  )
}

export default Precedent