import React, { useEffect, useState } from 'react'
import CardRend from '../components/CardRend'
import Precedent from '../components/Precedent'
import axios from 'axios'

function GetApp() {
  return (
    <div className='parentGetApp'>
        <Precedent />
        <div style={{marginTop:"4rem"}}>
            {/* {
                data.forEach((dat)=>{
                    <CardRend className='cardRend' creneau={dat.creneau} />
                })
            } */}        </div>
    </div>
  )
}

export default GetApp