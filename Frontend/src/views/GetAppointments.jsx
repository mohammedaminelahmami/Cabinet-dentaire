import React, { useEffect, useState } from 'react'
import CardRend from '../components/CardRend';
import Precedent from '../components/Precedent'
import axios from 'axios'

function GetAppointments() {

    const [data, setData] = useState([])

    useEffect(()=>{
        let formData = new FormData();
        formData.append('code', localStorage.getItem("myCode"));

        axios.post('http://localhost/brief6/reservation/selectAppt', formData)
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
    })

  return (
    <div>
        <Precedent pagePre='/rendezvous' />
        <div className='getApp'>
            {data.map((dat, index)=>{
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

export default GetAppointments