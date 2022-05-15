import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import axios from 'axios';
import Precedent from '../components/Precedent';

function SignUp() {

  // const [code, setCode] = useState();

  let nom = useRef('');
  let prenom = useRef('');
  let email = useRef('');
  let age = useRef('');
  let Code = useRef('');

  const HandleSubmit = ()=>{
    // e.preventDefault();
    let formData = new FormData();
    formData.append('nom', nom.current.value)
    formData.append('prenom', prenom.current.value)
    formData.append('email', email.current.value)
    formData.append('age', age.current.value)

    // signUp & get Code
    axios.post('http://localhost/brief6/user/register', formData)
    .then(function(response){
      let codeData = response.data.code
      if(codeData)
      {
        localStorage.setItem("code" ,response.data.code)
        console.log(codeData)
      }
    })
    .catch(function(error){
      console.log(error)
    })
  }

  function copyText(entryText){
    navigator.clipboard.writeText(entryText)
  }

  return (
    <div className='parentSignUp'>
      <Precedent />
      <form onSubmit={()=>{copyText(Code.current.value)}} className='CodeCopy'>
        <TextField className='form__input' label='Code' variant='filled' inputRef={Code} disabled value={localStorage.getItem("code") ? localStorage.getItem("code") : ''}></TextField>
        <Button type='submit'>Copy</Button>
      </form>

      <form onSubmit={HandleSubmit} className='form'>
        <TextField className='form__input' label='nom' variant='filled' type='name' inputRef={nom} required></TextField>
        <TextField className='form__input' label='prenom' variant='filled' type='name' inputRef={prenom} required></TextField>
        <TextField className='form__input' label='email' variant='filled' type='email' inputRef={email} required></TextField>
        <TextField className='form__input' label='age' variant='filled' type='number' inputRef={age} required></TextField>
        <Button type='submit' variant='contained' color='primary' className='form_submit'>Submit</Button>
      </form>
    </div>
  )
}

export default SignUp