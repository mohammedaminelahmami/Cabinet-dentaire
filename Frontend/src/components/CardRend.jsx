import React, { useState, useRef } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import img from '../imgs/img.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'

function CardRend(props) {

  const [showModal, setShowModal] = useState(false)
  const sujet = useRef('')

  const HandleClickEdit = ()=>{
    setShowModal(true)
  }

  const HandleClickDelete = ()=>{
    let formData = new FormData();
    formData.append('idReserve', props.idReserve)

    axios.post('http://localhost/brief6/reservation/cancelCreneau', formData)
    .then(function(response){
      // console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const HandleSubmitUpdate = (e)=>{
    e.preventDefault();
    let myFormData = new FormData();

    myFormData.append('code', localStorage.getItem('myCode'))
    myFormData.append('idReserve', props.idReserve)
    myFormData.append('sujet', sujet.current.value)

    axios.post('http://localhost/brief6/reservation/modifierSujet', myFormData)
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
    setShowModal(false)
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>

        <div>
          <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p className='title'>{props.date} &nbsp;&nbsp;|&nbsp;&nbsp; {props.creneau}</p>
            </Typography>

            <Typography variant="body2" color="text.secondary">
                <p className='sujet'>Sujet</p>
              <CardContent>
                {props.sujet}
                <br></br>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardContent>
            </Typography>
            <Button onClick={HandleClickEdit} variant="contained" startIcon={<EditIcon />}>Edit</Button>
            <Button onClick={HandleClickDelete} style={{marginLeft:"5px"}} variant="contained" color='error' startIcon={<DeleteIcon />}>Cancel</Button>
          </CardContent>

        </div>

      </Card>

      {/* Modal */}
      {showModal ? (
        <div className="div1">
            <div className="div3">
              <div className='group_div3_div4'>
                <div className="div4">
                  <h3>Edit</h3>
                </div>

                <button onClick={() => setShowModal(false)} className='buttonX'>
                    <span>
                      x
                    </span>
                  </button>
              </div>

              <div>

              <form onSubmit={HandleSubmitUpdate} className='modalForm'>
                <TextField className='form__input' inputRef={sujet} defaultValue={props.sujet} label='Sujet' variant='filled' type='name' style={{width:"23rem"}} required></TextField>
                <Button type='submit' variant='contained' color='primary' className='form_submit'>Submit</Button>
              </form>

              </div>
            </div>
          </div>
    ) : null}
  </div>
  )
}

export default CardRend