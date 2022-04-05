import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Precedent from '../components/Precedent'
import Rendezvous from './Rendezvous'

function Login() {

  const [content, setContent] = useState(false);

  const codeField = useRef('');
  let formData = new FormData;
  
  const HandleSubmit = (e)=>{
    e.preventDefault();
    
    formData.append('code', codeField.current.value)
    
    axios.post('http://localhost/brief6/Backend/user/login', formData)
    .then(function(response){
      let data = response.data;
      if(data === "True")
      {
        localStorage.setItem("myCode", codeField.current.value);
        setContent(true);
      }else{
        console.log(data);
      }
    })
    .catch(function(error){
      console.log(error);
    })

    // console.log(codeField.current.value);
  }

  return (
    <div className='parentLogin'>
      {content && <Rendezvous />}
      {!content&&
        <div>
          <Precedent />
          <form onSubmit={HandleSubmit} className='btn__Code'>
            <TextField 
              className='form__input' 
              label='Code' 
              variant='filled' 
              inputRef={codeField}
              type='nubmer'
              required
              >
            </TextField>
            <Button style={{textDecoration:"none", alignSelf:"center"}} type='submit' variant='contained' color='primary'>Submit</Button>
          </form>
        </div>
      }
    
    </div>
  )
}

export default Login